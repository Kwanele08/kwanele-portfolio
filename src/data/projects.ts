import steganographyImage from '../assets/images/projects/steganography.png'
import reverseLogisticsImage from '../assets/images/projects/reverse-logistics.png'
import debuggingAssistantImage from '../assets/images/projects/debugging-assistant.png'
import secureIPCImage from '../assets/images/projects/secure-ipc.png'
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 1,
    slug: 'steganography',
    title: 'Deep Learning-Based Image Steganography',
    category: 'Deep Learning · Computer Vision · Research',
    description:
      'A deep learning image steganography system designed to hide secret images inside cover images while improving robustness under Gaussian noise.',
    technologies: [
      'Python',
      'PyTorch',
      'OpenCV',
      'CNN',
      'CIFAR-10',
    ],
    metric: '68–88%',
    metricLabel: 'Reduction in secret reconstruction error under tested noise levels',
    github: 'https://github.com/Kwanele08/stego',
    image: steganographyImage,
    imageAlt: 'Deep Learning-Based Image Steganography Project Results',
    problem:
      'Traditional image steganography techniques can hide information inside images, but they may struggle to recover hidden content reliably when the stego image is affected by noise. This project investigates whether deep learning can improve robustness while maintaining visual similarity.',

    approach:
      'I compared a classical 2-bit LSB steganography baseline with a deep learning encoder-decoder architecture. The deep model was trained to hide and reconstruct secret images, while Gaussian noise augmentation was introduced to improve robustness under noisy conditions.',

    contribution:
      'I implemented the complete experimental pipeline, including dataset preparation, the classical LSB baseline, the encoder-decoder model, training logic, Gaussian noise augmentation, evaluation metrics, batch experiments, and result visualizations.',

    implementation: [
      'Built an image-in-image hiding pipeline using a convolutional encoder-decoder architecture.',
      'Implemented a 2-bit LSB steganography baseline for comparison.',
      'Added Gaussian noise during training to improve reconstruction robustness.',
      'Evaluated model performance using PSNR, SSIM, and Mean Squared Error.',
      'Ran reproducible experiments across 100 fixed image pairs.',
      'Generated comparison graphs and CSV-based experimental results.',
    ],

    results: [
      'Baseline deep model achieved an average PSNR of 30.58 dB.',
      'Baseline SSIM reached 0.9591 under standard evaluation.',
      'The robust model reduced secret reconstruction MSE by approximately 68–88% compared with the baseline under tested Gaussian noise levels.',
      'The model maintained comparable structural image quality while improving reconstruction robustness.',
    ],

    learnings: [
      'Robustness must be evaluated under realistic distortions rather than only clean-image conditions.',
      'Quantitative image-quality metrics provide a more reliable comparison than visual inspection alone.',
      'Training with noise augmentation can significantly improve generalization under degraded input conditions.',
    ],
  },
  {
    id: 2,
    slug: 'reverse-logistics',
    title: 'Digital Reverse Logistics for Damaged Goods',
    category: 'Machine Learning · Data Analysis · Streamlit',
    description:
      'An applied machine-learning platform for damaged-goods return analysis, combining damage prediction, clustering, visualization, and transport optimization.',
    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'Streamlit',
      'K-Means',
    ],
    github: 'https://github.com/Kwanele08/reverse-logistics',
    image: reverseLogisticsImage,
    imageAlt: 'Digital Reverse Logistics for Damaged Goods Project',
    problem:
      'Managing damaged product returns efficiently requires more than simply recording that an item was returned. Businesses need to identify whether returned goods are damaged, understand patterns in return behaviour, and make better decisions about how returned products should be handled. This project explores how machine learning can support those decisions within a practical reverse-logistics workflow.',

    approach:
      'I developed an applied machine-learning workflow that combines supervised classification, unsupervised clustering, data visualization, and an interactive Streamlit interface. A Random Forest classifier was used for damage prediction, while K-Means clustering was used to identify patterns within product returns. PCA was also used to visualize the resulting clusters.',

    contribution:
      'As part of the group project, I was responsible for the machine-learning and application-integration components. I implemented the data preprocessing pipeline, damage prediction model, clustering model, model evaluation, model persistence using Joblib, and the integration of the models into the Streamlit dashboard.',

    implementation: [
      'Prepared and preprocessed the returns dataset for machine-learning analysis.',
      'Built a Random Forest classification model for damage prediction.',
      'Implemented K-Means clustering to identify patterns in product-return behaviour.',
      'Used PCA to reduce dimensionality and visualize the generated clusters.',
      'Integrated trained models into an interactive Streamlit application.',
      'Implemented CSV upload and downloadable prediction and clustering results.',
      'Added data visualizations to support exploration of return patterns.',
      'Included a transport-optimization component using synthetic coordinate data.',
    ],

    results: [
      'The damage prediction model achieved 57% accuracy on the test dataset.',
      'The application successfully performs damage prediction and return-pattern clustering through an interactive interface.',
      'Users can upload datasets, visualize analysis results, and download generated prediction and clustering outputs.',
      'The completed system demonstrates an end-to-end workflow from data preprocessing and machine learning to interactive application delivery.',
    ],

    learnings: [
      'Model accuracy must be interpreted in the context of the quality and limitations of the available dataset.',
      'Combining machine learning with an interactive application makes analytical models significantly more useful to end users.',
      'Clustering can reveal useful structure in return behaviour even when labelled outcomes are not available.',
    ],
  },
  {
    id: 3,
    slug: 'debugging-assistant',
    title: 'Code Debugging Assistant',
    category: 'Software Engineering · Developer Tools · Python',
    description:
      'A developer-focused debugging application that executes code, classifies errors, identifies likely fault locations, and provides understandable recommendations.',
    technologies: [
      'Python',
      'Streamlit',
      'Judge0 API',
      'REST',
      'Static Analysis',
    ],
    github: 'https://github.com/Kwanele08/CodeDebuggingChatbot',
    image: debuggingAssistantImage,
    imageAlt: 'Code Debugging Assistant Project',
    problem:
      'Programming error messages can be difficult to interpret, particularly for learners who may not yet understand compiler or runtime terminology. Simply displaying an error does not always help a developer understand what went wrong, where the problem is located, or how it might be corrected.',

    approach:
      'I built a debugging assistant that combines remote code execution with custom rule-based and heuristic analysis. Code is executed through the Judge0 CE API, after which the application analyses the resulting compiler or runtime output to classify errors, identify likely fault locations, and provide clearer explanations and possible fixes.',

    contribution:
      'I developed and refined the application as an individual project, including the integration with Judge0, input and execution handling, debugging workflow, user interface, and custom rule-based analysis. AI-assisted development was used during parts of implementation, but I reviewed, modified, and worked through the resulting code to ensure I understood the application behaviour and architecture.',

    implementation: [
      'Integrated the Judge0 CE API to support execution of code in multiple programming languages.',
      'Implemented standard-input handling for programs that require user input.',
      'Built custom rule-based logic for classifying common compiler and runtime errors.',
      'Added human-readable explanations for detected programming errors.',
      'Implemented identification of likely faulty lines and suggested fixes.',
      'Added code-quality checks, security warnings, and performance information.',
      'Displayed raw compiler and runtime output for transparency during debugging.',
      'Implemented debugging history together with execution-time and memory information.',
    ],

    results: [
      'The application successfully executes supported programs through the Judge0 CE API.',
      'It detects and classifies several common programming errors and provides simplified explanations.',
      'The system can identify likely problem locations and generate possible fixes and recommendations.',
      'It also identifies selected code-quality and security issues while reporting execution-time and memory information.',
      'No formal accuracy benchmark has been established yet for the rule-based debugging analysis.',
    ],

    learnings: [
      'Developer tools are more useful when they explain errors rather than simply exposing raw compiler output.',
      'External APIs can provide powerful execution capabilities while allowing the main application to focus on analysis and user experience.',
      'Rule-based systems can provide useful intelligent behaviour without requiring a machine-learning model or large language model.',
    ],
  },
  {
    id: 4,
    slug: 'secure-ipc',
    title: 'Secure IPC Simulation for Autonomous Vehicles',
    category: 'Cybersecurity · Systems · Python',
    description:
      'A secure inter-process communication simulation for autonomous vehicle software modules using encrypted messaging, authentication, and tamper detection.',
    technologies: [
      'Python',
      'ZeroMQ',
      'AES-256-CBC',
      'HMAC-SHA256',
      'GitHub Codespaces',
    ],
    github: 'https://github.com/Kwanele08/OS-Security-For-Autonomous-Vehicles',
    image: secureIPCImage,
    imageAlt: 'Secure IPC Simulation for Autonomous Vehicles Project',
    problem:
      'Software modules inside autonomous vehicles may need to exchange sensitive information between processes. If that communication is not protected, messages could potentially be intercepted, modified, or forged, creating risks to confidentiality, integrity, and authenticity.',

    approach:
      'I developed a software-based secure inter-process communication simulation using ZeroMQ for message transport. Messages are encrypted using AES-256-CBC and authenticated using HMAC-SHA256. The system follows an Encrypt-then-MAC approach so the receiver can verify message integrity before accepting transmitted data.',

    contribution:
      'I implemented and refined the project as an individual system, including the sender and receiver architecture, ZeroMQ communication, encryption and decryption workflow, HMAC generation and verification, message serialization, and tamper-detection logic. AI-assisted coding was used during parts of development, followed by substantial review, modification, testing, and debugging to ensure I understood the complete implementation.',

    implementation: [
      'Built a modular sender and receiver architecture using ZeroMQ.',
      'Implemented AES-256-CBC encryption to protect message confidentiality.',
      'Implemented HMAC-SHA256 to verify message integrity and authenticity.',
      'Applied an Encrypt-then-MAC security design to transmitted messages.',
      'Implemented message serialization and deserialization using JSON.',
      'Added verification logic that detects modified or tampered messages.',
      'Tested the system through command-line execution and GitHub Codespaces.',
    ],

    results: [
      'The system successfully demonstrated encrypted communication between separate sender and receiver processes.',
      'The receiver can verify the integrity and authenticity of incoming messages before processing them.',
      'Messages that are modified or tampered with are detected and rejected.',
      'The project demonstrates confidentiality, integrity, and authenticity without requiring specialised automotive hardware.',
    ],

    learnings: [
      'Encryption alone does not guarantee message integrity, so authentication must also be part of secure communication design.',
      'Separating communication, encryption, authentication, and serialization into modular components makes security systems easier to understand and maintain.',
      'Simulations can be useful for demonstrating automotive software-security principles even when specialised vehicle hardware is unavailable.',
    ],
  },
]