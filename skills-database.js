// backend/skills-database.js

const ULTIMATE_IT_SKILLS_DATABASE = [
    // Programming language
    "JavaScript", "Python", "Java", "C", "C++", "C#", "TypeScript", "PHP", "Ruby", "Swift", 
    "Kotlin", "Go", "Rust", "Dart", "Scala", "Perl", "R", "MATLAB", "Objective-C", "VB.NET",
    "F#", "Clojure", "Haskell", "Erlang", "Elixir", "Julia", "Nim", "Crystal", "Zig", "D",
    "COBOL", "Fortran", "Pascal", "Delphi", "Assembly", "VHDL", "Verilog", "SQL", "PL/SQL",
    "T-SQL", "Lua", "PowerShell", "Bash", "Shell", "Groovy", "CoffeeScript", "LiveScript",
    "PureScript", "Elm", "ReasonML", "OCaml", "Scheme", "Lisp", "Prolog", "ActionScript",
    "Adobe Flash", "VBScript", "JScript", "AppleScript", "AutoHotkey", "Tcl", "Awk", "Sed",

    // Frontend
    "React", "React.js", "Angular", "Vue.js", "Next.js", "Nuxt.js", "Svelte", "SvelteKit",
    "Ember.js", "Backbone.js", "jQuery", "Bootstrap", "Tailwind CSS", "CSS", "Material-UI", "Chakra UI",
    "Ant Design", "Semantic UI", "Foundation", "Bulma", "Alpine.js", "Stimulus", "Lit", "Stencil",
    "Preact", "Inferno", "Mithril", "Riot.js", "Polymer", "Web Components", "StencilJS",
    
    // Backend
    "Express.js", "Node.js", "Django", "Flask", "FastAPI", "Ruby on Rails", "Spring Boot", 
    "Spring Framework", "Laravel", "Symfony", "CodeIgniter", "Zend", "CakePHP", "Yii",
    "ASP.NET", "ASP.NET Core", "Blazor", ".NET Framework", ".NET Core", ".NET 5", ".NET 6",
    "Gin", "Echo", "Fiber", "Buffalo", "Revel", "Beego", "Iris", "Chi", "Gorilla",
    "Actix", "Rocket", "Warp", "Axum", "Tide", "Hyper", "Tower", "Tokio",
    "Phoenix", "Plug", "Cowboy", "Ranch", "GenServer", "OTP",

    //mobile development
    "React Native", "Flutter", "Xamarin", "Ionic", "Cordova", "PhoneGap", "Capacitor",
    "Native Script", "Unity", "Unreal Engine", "Cocos2d", "Android Studio", "Xcode",
    "Swift UI", "UIKit", "Jetpack Compose", "Android SDK", "iOS SDK", "Kotlin Multiplatform",
    "Flutter SDK", "Dart SDK", "React Native CLI", "Expo", "Flipper", "Fastlane",
    "TestFlight", "Firebase", "Push Notifications", "In-App Purchases", "App Store Connect",

    // SQL Databases
    "MySQL", "PostgreSQL", "SQLite", "Microsoft SQL Server", "Oracle Database", "MariaDB",
    "IBM DB2", "SAP HANA", "Amazon Aurora", "Google Cloud SQL", "Azure SQL Database",
    "CockroachDB", "TiDB", "Vitess", "PlanetScale", "Neon", "Supabase",
    
    // NoSQL Databases
    "MongoDB", "Cassandra", "Redis", "Elasticsearch", "DynamoDB", "Firebase Firestore",
    "CouchDB", "Neo4j", "ArangoDB", "OrientDB", "Amazon DocumentDB", "Azure Cosmos DB",
    "Google Bigtable", "Apache HBase", "Riak", "Voldemort", "Berkeley DB", "LevelDB",
    "RocksDB", "Apache Drill", "InfluxDB", "TimescaleDB", "ClickHouse", "Apache Pinot",
    
    // Graph Databases
    "Neo4j", "Amazon Neptune", "ArangoDB", "OrientDB", "TigerGraph", "Dgraph", "JanusGraph",
    "Apache TinkerPop", "Gremlin", "Cypher", "SPARQL", "GraphQL", "FaunaDB",

    // Major Cloud Providers
    "AWS", "Amazon Web Services", "Microsoft Azure", "Google Cloud Platform", "GCP",
    "IBM Cloud", "Oracle Cloud", "Alibaba Cloud", "Tencent Cloud", "DigitalOcean",
    "Linode", "Vultr", "Hetzner", "OVH", "Scaleway", "Cloudflare", "Fastly", "Salesforce",
    
    // AWS Services
    "EC2", "S3", "RDS", "Lambda", "CloudFront", "Route 53", "VPC", "IAM", "CloudWatch",
    "CloudFormation", "ECS", "EKS", "Fargate", "API Gateway", "SQS", "SNS", "DynamoDB",
    "ElastiCache", "Redshift", "EMR", "Glue", "Athena", "QuickSight", "SageMaker",
    "Rekognition", "Comprehend", "Translate", "Polly", "Lex", "Connect", "WorkSpaces",
    
    // Azure Services
    "Azure Virtual Machines", "Azure Storage", "Azure SQL Database", "Azure Functions",
    "Azure CDN", "Azure DNS", "Azure Virtual Network", "Azure Active Directory",
    "Azure Monitor", "Azure Resource Manager", "Azure Container Instances", "AKS",
    "Azure API Management", "Service Bus", "Event Grid", "Cosmos DB", "Redis Cache",
    "Synapse Analytics", "HDInsight", "Data Factory", "Stream Analytics", "Power BI",
    "Cognitive Services", "Bot Framework", "Logic Apps", "Azure DevOps",
    
    // GCP Services
    "Compute Engine", "Cloud Storage", "Cloud SQL", "Cloud Functions", "Cloud CDN",
    "Cloud DNS", "VPC", "Cloud IAM", "Cloud Monitoring", "Cloud Deployment Manager",
    "Google Kubernetes Engine", "GKE", "Cloud Run", "Cloud Endpoints", "Pub/Sub",
    "Cloud Tasks", "Firestore", "Cloud Memorystore", "BigQuery", "Dataflow",
    "Dataproc", "Cloud Composer", "Data Studio", "AI Platform", "AutoML", "Vision API",

    // CI/CD Tools
    "Jenkins", "GitHub Actions", "GitLab CI/CD", "CircleCI", "Travis CI", "Azure DevOps",
    "TeamCity", "Bamboo", "Octopus Deploy", "Spinnaker", "Argo CD", "Flux", "Tekton",
    "Drone", "Buildkite", "Concourse", "GoCD", "Buddy", "Codeship", "Semaphore",
    "Harness", "Codefresh", "AWS CodePipeline", "AWS CodeBuild", "AWS CodeDeploy",
    "Google Cloud Build", "Azure Pipelines", "Bitbucket Pipelines",
    
    // Containerization & Orchestration
    "Docker", "Kubernetes", "OpenShift", "Rancher", "Docker Swarm", "Nomad", "Mesos",
    "Podman", "Buildah", "Skopeo", "Containerd", "CRI-O", "rkt", "LXC", "LXD",
    "Helm", "Kustomize", "Skaffold", "Draft", "Tilt", "Garden", "Okteto", "Telepresence",
    
    // Infrastructure as Code
    "Terraform", "Ansible", "Chef", "Puppet", "SaltStack", "CloudFormation", "Pulumi",
    "Vagrant", "Packer", "Consul", "Vault", "Nomad", "Terragrunt", "Terratest",
    "AWS CDK", "Azure ARM Templates", "Google Deployment Manager", "Crossplane",
    
    // Monitoring & Logging
    "Prometheus", "Grafana", "ELK Stack", "Elasticsearch", "Logstash", "Kibana",
    "Fluentd", "Fluent Bit", "Splunk", "Datadog", "New Relic", "AppDynamics", "Dynatrace",
    "Jaeger", "Zipkin", "OpenTracing", "OpenTelemetry", "Sentry", "Rollbar", "Bugsnag",

    // Unit Testing
    "Jest", "Mocha", "Chai", "Jasmine", "Karma", "QUnit", "Tape", "AVA", "Vitest",
    "JUnit", "TestNG", "Mockito", "PowerMock", "EasyMock", "WireMock", "RestAssured",
    "pytest", "unittest", "nose", "doctest", "mock", "pytest-mock", "hypothesis",
    "RSpec", "MiniTest", "Cucumber", "FactoryBot", "VCR", "WebMock",
    "NUnit", "MSTest", "xUnit.net", "Moq", "AutoFixture", "FluentAssertions",
    "PHPUnit", "Codeception", "Behat", "Mockery", "Prophecy", "Faker",
    
    // E2E Testing
    "Selenium", "WebDriver", "Cypress", "Playwright", "Puppeteer", "TestCafe",
    "Protractor", "WebDriverIO", "Nightwatch", "CodeceptJS", "Detox", "Appium",
    "Espresso", "XCTest", "EarlGrey", "KIF", "Calabash", "Robot Framework",
    
    // Performance Testing
    "JMeter", "Gatling", "Locust", "Artillery", "k6", "LoadRunner", "BlazeMeter",
    "WebLOAD", "NeoLoad", "LoadNinja", "Flood.io", "OctoPerf", "LoadView",
    
    // API Testing
    "Postman", "Insomnia", "REST Assured", "SoapUI", "Karate", "Newman", "Frisby",
    "Supertest", "Dredd", "Pact", "WireMock", "MockServer", "JSON Server",

    // Deep Learning Frameworks
    "TensorFlow", "PyTorch", "Keras", "Caffe", "Theano", "MXNet", "PaddlePaddle",
    "Chainer", "CNTK", "JAX", "Flax", "Haiku", "Trax", "FastAI", "Ludwig", "H2O",
    "MLflow", "Kubeflow", "TFX", "PyTorch Lightning", "Ignite", "Catalyst",
    
    // ML Libraries
    "Scikit-learn", "pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn", "Plotly",
    "Bokeh", "Altair", "Statsmodels", "XGBoost", "LightGBM", "CatBoost", "SHAP",
    "LIME", "Yellowbrick", "Imbalanced-learn", "Feature-engine", "Category Encoders",
    
    // NLP Libraries
    "spaCy", "NLTK", "Gensim", "TextBlob", "Stanford NLP", "AllenNLP", "Transformers",
    "Hugging Face", "OpenAI GPT", "BERT", "T5", "RoBERTa", "ELECTRA", "DeBERTa",
    "GPT-3", "GPT-4", "Claude", "LaMDA", "PaLM", "Chinchilla", "LLaMA", "Alpaca",
    
    // Computer Vision
    "OpenCV", "PIL", "Pillow", "ImageIO", "scikit-image", "Mahotas", "SimpleCV",
    "Dlib", "Face Recognition", "MediaPipe", "YOLO", "ResNet", "VGG", "Inception",
    "MobileNet", "EfficientNet", "Vision Transformer", "CLIP", "DALL-E", "Stable Diffusion",

    //version control
    "Git", "GitHub", "GitLab", "Bitbucket", "Azure DevOps", "SourceForge", "CodeCommit",
    "Mercurial", "Subversion", "SVN", "Perforce", "Bazaar", "Fossil", "Darcs",
    "Git Flow", "GitHub Flow", "GitLab Flow", "Trunk-based Development", "Feature Branching",
    "Pull Requests", "Merge Requests", "Code Review", "Collaborative Development",
    "Git Hooks", "Pre-commit", "Husky", "Lint-staged", "Conventional Commits",

    //Security tools
    "AWS Security Hub", "Aircrack-ng", "AlienVault", "Aqua Security", "Avast",
    "Azure Security Center", "Bitdefender", "CHFI", "CISCO", "Checkpoint",
    "Cisco ASA", "Cisco Meraki", "Cisco Packet Tracer", "ClamAV", "CrowdStrike Falcon",
    "Cybersecurity Essentials", "Darktrace", "ECSA", "ESET", "Ettercap",
    "F-Secure", "FireEye", "Fortinet", "Google Chronicle", "Google Cloud Security Command Center",
    "Graylog", "Hping", "IBM QRadar", "ISO 27001", "Juniper",

    // Application Security
    "OWASP", "SonarQube", "Checkmarx", "Veracode", "Fortify", "Snyk", "WhiteSource",
    "Black Duck", "Contrast Security", "Rapid7", "Qualys", "Nessus", "OpenVAS",
    "Burp Suite", "OWASP ZAP", "Acunetix", "AppScan", "WebInspect", "Invicti",
    
    // Infrastructure Security
    "Vault", "Secrets Manager", "Key Management", "Certificate Management", "PKI",
    "OAuth", "OpenID Connect", "SAML", "JWT", "LDAP", "Active Directory", "Okta",
    "Auth0", "Firebase Auth", "AWS Cognito", "Azure AD", "Google Identity",
    
    // Network Security
    "Wireshark", "Nmap", "Metasploit", "Kali Linux", "Parrot OS", "pfSense",
    "Firewall", "VPN", "SSL/TLS", "IPSec", "WireGuard", "OpenVPN", "IDS/IPS",
    "SIEM", "SOC", "Threat Intelligence", "Penetration Testing", "Vulnerability Assessment",

    // Blockchain Platforms
    "Ethereum", "Bitcoin", "Binance Smart Chain", "Polygon", "Solana", "Cardano",
    "Polkadot", "Chainlink", "Avalanche", "Cosmos", "Terra", "Algorand", "Tezos",
    "Near Protocol", "Fantom", "Harmony", "Celo", "Flow", "Hedera", "VeChain",
    
    // Smart Contract Languages
    "Solidity", "Vyper", "Rust", "Move", "Cadence", "Clarity", "Scilla", "Plutus",
    "Marlowe", "Michelson", "DAML", "Chaincode", "Go", "JavaScript", "TypeScript",
    
    // Web3 Tools
    "Web3.js", "Ethers.js", "Truffle", "Hardhat", "Remix", "Ganache", "OpenZeppelin",
    "Metamask", "WalletConnect", "IPFS", "Arweave", "The Graph", "Moralis", "Alchemy",
    "Infura", "QuickNode", "Chainstack", "Tenderly", "Foundry", "Brownie",

    // Data Processing
    "Apache Spark", "Hadoop", "Kafka", "Airflow", "Prefect", "Luigi", "Dagster",
    "Apache Beam", "Apache Flink", "Storm", "Samza", "Pulsar", "RabbitMQ", "ActiveMQ",
    "Redis", "Memcached", "Hazelcast", "Apache Ignite", "GridGain", "Coherence",
    
    // Data Warehousing
    "Snowflake", "Redshift", "BigQuery", "Databricks", "Synapse", "Teradata",
    "Oracle Exadata", "Vertica", "Greenplum", "ClickHouse", "Apache Druid", "Pinot",
    "Delta Lake", "Apache Iceberg", "Apache Hudi", "Lakehouse", "Data Lake",
    
    // BI Tools
    "Tableau", "Power BI", "Looker", "Qlik Sense", "Sisense", "Domo", "Chartio",
    "Metabase", "Apache Superset", "Grafana", "D3.js", "Observable", "Plotly Dash",

    //Game development
    "Unity", "Unreal Engine", "Godot", "GameMaker Studio", "Construct", "Defold",
    "Cocos2d", "LibGDX", "MonoGame", "SDL", "SFML", "Allegro", "OpenGL", "DirectX",
    "Vulkan", "Metal", "WebGL", "Three.js", "Babylon.js", "A-Frame", "PlayCanvas",
    "Phaser", "PixiJS", "Matter.js", "Cannon.js", "Ammo.js", "Bullet Physics",

    // Operating Systems
    "Linux", "Ubuntu", "CentOS", "RHEL", "Debian", "Fedora", "SUSE", "Arch Linux",
    "Gentoo", "Alpine", "CoreOS", "Container Linux", "Windows Server", "Windows 10/11",
    "macOS", "FreeBSD", "OpenBSD", "NetBSD", "Solaris", "AIX", "HP-UX", "z/OS",
    
    // System Administration
    "Bash", "PowerShell", "Zsh", "Fish", "Tmux", "Screen", "Vim", "Emacs", "Nano",
    "systemd", "upstart", "SysV", "cron", "systemctl", "service", "chkconfig",
    "iptables", "firewalld", "ufw", "SELinux", "AppArmor", "sudo", "PAM", "LDAP",
    
    // Virtualization
    "VMware", "VirtualBox", "Hyper-V", "KVM", "Xen", "QEMU", "Proxmox", "oVirt",
    "Citrix", "Parallels", "Docker Desktop", "Vagrant", "Multipass", "Lima",

    //Hardware embbeded
    "Arduino", "Raspberry Pi", "ESP32", "ESP8266", "STM32", "PIC", "AVR", "ARM",
    "RISC-V", "FPGA", "Verilog", "VHDL", "SystemVerilog", "Chisel", "MyHDL",
    "Embedded C", "FreeRTOS", "Zephyr", "mbed", "PlatformIO", "Yocto", "OpenWrt",
    "Buildroot", "U-Boot", "Device Tree", "I2C", "SPI", "UART", "GPIO", "PWM",
    "CAN Bus", "Modbus", "Zigbee", "LoRa", "WiFi", "Bluetooth", "NFC", "RFID",

    // SAP Core Modules
    "SAP ABAP", "SAP MM", "SAP Materials Management", "SAP HANA", "SAP HANA 2.0", 
    "SAP S/4HANA", "SAP ECC", "SAP FI", "SAP Financial Accounting", "SAP CO", 
    "SAP Controlling", "SAP SD", "SAP Sales and Distribution", "SAP PP", 
    "SAP Production Planning", "SAP HCM", "SAP Human Capital Management",
    "SAP SCM", "SAP Supply Chain Management", "SAP CRM", "SAP Customer Relationship Management",
    "SAP BW", "SAP Business Warehouse", "SAP BI", "SAP Business Intelligence",
    "SAP BASIS", "SAP NetWeaver", "SAP Fiori", "SAP UI5", "SAP Gateway",
    "SAP PI/PO", "SAP Process Integration", "SAP Process Orchestration",
    "SAP Solution Manager", "SAP GRC", "SAP Governance Risk Compliance",
    "SAP SuccessFactors", "SAP Concur", "SAP Ariba", "SAP Fieldglass",
    "SAP C/4HANA", "SAP Commerce Cloud", "SAP Marketing Cloud", "SAP Sales Cloud",
    "SAP Service Cloud", "SAP Customer Data Cloud", "SAP Analytics Cloud",
    "SAP Data Services", "SAP MDG", "SAP Master Data Governance",
    "SAP BPC", "SAP Business Planning and Consolidation", "SAP Strategy Management",
    "SAP Transportation Management", "SAP Extended Warehouse Management",
    "SAP Advanced Planning and Optimization", "SAP Integrated Business Planning",

    // Azure Fundamentals
    "AZ-900", "Azure Fundamentals", "Microsoft Certified Azure Fundamentals",
    
    // Azure Associate Level
    "AZ-104", "Azure Administrator Associate", "Microsoft Certified Azure Administrator Associate",
    "AZ-204", "Azure Developer Associate", "Microsoft Certified Azure Developer Associate", 
    "AZ-500", "Azure Security Engineer Associate", "Microsoft Certified Azure Security Engineer Associate",
    "DP-203", "Azure Data Engineer Associate", "Microsoft Certified Azure Data Engineer Associate",
    "DP-300", "Azure Database Administrator Associate", "Microsoft Certified Azure Database Administrator Associate",
    "AI-102", "Azure AI Engineer Associate", "Microsoft Certified Azure AI Engineer Associate",
    "DP-100", "Azure Data Scientist Associate", "Microsoft Certified Azure Data Scientist Associate",
    "PL-300", "Power BI Data Analyst Associate", "Microsoft Certified Data Analyst Associate",
    
    // Azure Expert Level
    "AZ-305", "Azure Solutions Architect Expert", "Microsoft Certified Azure Solutions Architect Expert",
    "AZ-400", "DevOps Engineer Expert", "Microsoft Certified DevOps Engineer Expert",
    
    // Azure Specialty
    "AZ-120", "SAP on Azure", "Microsoft Certified SAP on Azure Specialist",
    "AZ-140", "Windows Virtual Desktop", "Microsoft Certified Windows Virtual Desktop Specialty",
    
    // Microsoft 365
    "MS-900", "Microsoft 365 Fundamentals", "Microsoft Certified Microsoft 365 Fundamentals",
    "MS-100", "Microsoft 365 Identity and Services", "Microsoft Certified Microsoft 365 Enterprise Administrator Expert",
    "MS-101", "Microsoft 365 Mobility and Security", "Microsoft Certified Microsoft 365 Enterprise Administrator Expert",
    "MS-203", "Microsoft 365 Messaging", "Microsoft Certified Messaging Administrator Associate",
    "MS-500", "Microsoft 365 Security Administration", "Microsoft Certified Security Administrator Associate",
    "MS-700", "Microsoft Teams Administrator", "Microsoft Certified Teams Administrator Associate",
    
    // Power Platform
    "PL-900", "Power Platform Fundamentals", "Microsoft Certified Power Platform Fundamentals",
    "PL-100", "Power Platform App Maker", "Microsoft Certified Power Platform App Maker Associate",
    "PL-200", "Power Platform Functional Consultant", "Microsoft Certified Power Platform Functional Consultant Associate",
    "PL-400", "Power Platform Developer", "Microsoft Certified Power Platform Developer Associate",
    "PL-500", "Power Automate RPA Developer", "Microsoft Certified Power Automate RPA Developer Associate",
    "PL-600", "Power Platform Solution Architect", "Microsoft Certified Power Platform Solution Architect Expert",
    
    // Dynamics 365
    "MB-901", "Dynamics 365 Fundamentals", "Microsoft Certified Dynamics 365 Fundamentals",
    "MB-200", "Dynamics 365 Customer Engagement Core", "Microsoft Certified Dynamics 365 Customer Engagement Core",
    "MB-210", "Dynamics 365 Sales", "Microsoft Certified Dynamics 365 Sales Functional Consultant Associate",
    "MB-220", "Dynamics 365 Marketing", "Microsoft Certified Dynamics 365 Marketing Functional Consultant Associate",
    "MB-230", "Dynamics 365 Customer Service", "Microsoft Certified Dynamics 365 Customer Service Functional Consultant Associate",
    "MB-240", "Dynamics 365 Field Service", "Microsoft Certified Dynamics 365 Field Service Functional Consultant Associate",
    "MB-300", "Dynamics 365 Finance and Operations Core", "Microsoft Certified Dynamics 365 Finance and Operations Apps Core",
    "MB-310", "Dynamics 365 Finance", "Microsoft Certified Dynamics 365 Finance Functional Consultant Associate",
    "MB-320", "Dynamics 365 Supply Chain Management Manufacturing", "Microsoft Certified Dynamics 365 Supply Chain Management Manufacturing",
    "MB-330", "Dynamics 365 Supply Chain Management", "Microsoft Certified Dynamics 365 Supply Chain Management Functional Consultant Associate",
    
    // Security and Compliance
    "SC-900", "Security Compliance and Identity Fundamentals", "Microsoft Certified Security Compliance and Identity Fundamentals",
    "SC-200", "Security Operations Analyst", "Microsoft Certified Security Operations Analyst Associate",
    "SC-300", "Identity and Access Administrator", "Microsoft Certified Identity and Access Administrator Associate",
    "SC-400", "Information Protection Administrator", "Microsoft Certified Information Protection Administrator Associate",

    //AWS Certifications
    // Foundational
    "AWS Cloud Practitioner", "CLF-C01", "AWS Certified Cloud Practitioner",
    
    // Associate Level
    "AWS Solutions Architect Associate", "SAA-C03", "AWS Certified Solutions Architect Associate",
    "AWS Developer Associate", "DVA-C01", "AWS Certified Developer Associate",
    "AWS SysOps Administrator Associate", "SOA-C02", "AWS Certified SysOps Administrator Associate",
    
    // Professional Level
    "AWS Solutions Architect Professional", "SAP-C02", "AWS Certified Solutions Architect Professional",
    "AWS DevOps Engineer Professional", "DOP-C02", "AWS Certified DevOps Engineer Professional",
    
    // Specialty
    "AWS Advanced Networking Specialty", "ANS-C01", "AWS Certified Advanced Networking Specialty",
    "AWS Security Specialty", "SCS-C02", "AWS Certified Security Specialty",
    "AWS Machine Learning Specialty", "MLS-C01", "AWS Certified Machine Learning Specialty",
    "AWS Database Specialty", "DBS-C01", "AWS Certified Database Specialty",
    "AWS Data Analytics Specialty", "DAS-C01", "AWS Certified Data Analytics Specialty",
    "AWS SAP on AWS Specialty", "PAS-C01", "AWS Certified SAP on AWS Specialty",

    //GCP
    // Associate
    "Google Cloud Associate Cloud Engineer", "Associate Cloud Engineer", "ACE",
    
    // Professional
    "Google Cloud Professional Cloud Architect", "Professional Cloud Architect", "PCA",
    "Google Cloud Professional Data Engineer", "Professional Data Engineer", "PDE",
    "Google Cloud Professional Cloud Developer", "Professional Cloud Developer", "PCD",
    "Google Cloud Professional Cloud Security Engineer", "Professional Cloud Security Engineer", "PCSE",
    "Google Cloud Professional Cloud Network Engineer", "Professional Cloud Network Engineer", "PCNE",
    "Google Cloud Professional Collaboration Engineer", "Professional Collaboration Engineer", "PCE",
    "Google Cloud Professional Machine Learning Engineer", "Professional Machine Learning Engineer", "PMLE",

    //Oracle
    // Database
    "OCA", "Oracle Certified Associate", "OCP", "Oracle Certified Professional",
    "OCE", "Oracle Certified Expert", "OCM", "Oracle Certified Master",
    "Oracle Database 19c Administrator", "Oracle Database 21c Administrator",
    "Oracle Database 23ai Administrator", "Oracle Database SQL", "Oracle PL/SQL",
    "Oracle RAC", "Oracle Data Guard", "Oracle GoldenGate", "Oracle Exadata",
    
    // Cloud
    "OCI Foundations Associate", "OCI Architect Associate", "OCI Architect Professional",
    "OCI Developer Associate", "OCI Operations Associate", "OCI Security Professional",
    "Oracle Cloud Infrastructure", "Oracle Autonomous Database",

    //VMware
    // Entry Level
    "VCA", "VMware Certified Associate", "VCTA", "VMware Certified Technical Associate",
    
    // Professional Level
    "VCP", "VMware Certified Professional", "VCP-DCV", "VCP Data Center Virtualization",
    "VCP-NV", "VCP Network Virtualization", "VCP-CMA", "VCP Cloud Management and Automation",
    "VCP-DTM", "VCP Desktop and Mobility", "VCP-EUC", "VCP End-User Computing",
    
    // Advanced Level
    "VCAP", "VMware Certified Advanced Professional", "VCAP-DCV Design", "VCAP-DCV Deploy",
    "VCAP-NV Design", "VCAP-NV Deploy", "VCAP-CMA Design", "VCAP-CMA Deploy",
    
    // Expert Level
    "VCDX", "VMware Certified Design Expert", "VCDX-DCV", "VCDX-NV", "VCDX-CMA",
    
    // Specialized
    "VMware vSphere", "VMware NSX", "VMware vSAN", "VMware Horizon",
    "VMware Cloud Foundation", "VMware Tanzu", "VMware Carbon Black",

    //CISCO
    // Entry Level
    "CCST", "Cisco Certified Support Technician", "CCST Networking", "CCST Cybersecurity",
    
    // Associate Level
    "CCNA", "Cisco Certified Network Associate", "CCNA 200-301",
    "CCDA", "Cisco Certified Design Associate",
    "CyberOps Associate", "CCNA CyberOps", "DevNet Associate",
    
    // Professional Level
    "CCNP", "Cisco Certified Network Professional", "CCNP Enterprise", "CCNP Security",
    "CCNP Data Center", "CCNP Service Provider", "CCNP Collaboration",
    "CCDP", "Cisco Certified Design Professional", "DevNet Professional",
    "CyberOps Professional", "CCNP ENCOR", "CCNP ENARSI",
    
    // Expert Level
    "CCIE", "Cisco Certified Internetwork Expert", "CCIE Enterprise Infrastructure",
    "CCIE Enterprise Wireless", "CCIE Security", "CCIE Data Center",
    "CCIE Service Provider", "CCIE Collaboration",
    "CCDE", "Cisco Certified Design Expert", "DevNet Expert",
    
    // Specialist
    "Cisco Specialist", "CCNP SCOR", "CCNP SISAS", "CCNP SNCF", "CCNP CLCOR",
    "CCNP CLACCM", "CCNP SPCOR", "CCNP SPRI",

    //compTIA
    // Core Certifications
    "CompTIA A+", "CompTIA Network+", "CompTIA Security+", "CompTIA Linux+",
    "CompTIA Server+", "CompTIA Cloud+", "CompTIA PenTest+", "CompTIA CySA+",
    "CompTIA CASP+", "CompTIA Advanced Security Practitioner",
    
    // Infrastructure
    "CompTIA ITF+", "CompTIA IT Fundamentals", "CompTIA Cloud Essentials+",
    
    // Cybersecurity
    "CompTIA SecurityX", "CompTIA DataX", "CompTIA CloudNetX",
    
    // Data and Analytics
    "CompTIA Data+", "CompTIA DataSys+",
    
    // Project Management
    "CompTIA Project+", "CompTIA CTT+", "Certified Technical Trainer",

    //redhat
    "RHCSA", "Red Hat Certified System Administrator", "EX200",
    "RHCE", "Red Hat Certified Engineer", "EX294",
    "RHCA", "Red Hat Certified Architect", "EX407", "EX447", "EX436",
    "Red Hat OpenShift", "Red Hat Ansible", "Red Hat Satellite",
    "Red Hat JBoss", "Red Hat Storage", "Red Hat Virtualization",

    // SAP S/4HANA
    "SAP Certified Application Associate SAP S/4HANA", "C_S4HANA_2020", "C_S4HANA_2021",
    "C_S4HANA_2022", "C_S4FI_2020", "C_S4CO_2020", "C_S4CPS_2020", "C_S4CS_2020",
    
    // SAP HANA
    "SAP Certified Technology Associate SAP HANA 2.0", "C_HANAIMP_17", "C_HANATEC_17",
    "SAP Certified Development Specialist ABAP for SAP HANA 2.0", "E_HANAAW_17",
    
    // SAP Modules
    "SAP Certified Application Associate Financial Accounting", "C_TFIN52_67",
    "SAP Certified Application Associate Management Accounting", "C_TFIN22_67",
    "SAP Certified Application Associate Sales and Distribution", "C_TSCM62_67",
    "SAP Certified Application Associate Materials Management", "C_TSCM52_67",
    "SAP Certified Application Associate Production Planning", "C_TSCM42_67",
    "SAP Certified Application Associate Human Capital Management", "C_THR12_67",
    "SAP Certified Application Associate Business Intelligence", "C_TBI30_74",
    
    // SAP Cloud
    "SAP Certified Application Associate SAP Cloud Platform", "C_CP_13",
    "SAP Certified Application Associate SAP SuccessFactors", "C_THR81_2011",
    "SAP Certified Application Associate SAP Concur", "C_CONCUR_2404",
    "SAP Certified Application Associate SAP Ariba", "C_ARCON_2404",

    // Kubernetes and Container
    "CKA", "Certified Kubernetes Administrator", "CKAD", "Certified Kubernetes Application Developer",
    "CKS", "Certified Kubernetes Security Specialist", "Docker Certified Associate",
    
    // Project Management
    "PMP", "Project Management Professional", "CAPM", "Certified Associate in Project Management",
    "Prince2", "Agile Certified Practitioner", "Scrum Master", "CSM", "PSM",
    
    // ITIL and Service Management
    "ITIL Foundation", "ITIL Practitioner", "ITIL Intermediate", "ITIL Expert", "ITIL Master",
    
    // Salesforce
    "Salesforce Administrator", "Salesforce Developer", "Salesforce Architect",
    "Salesforce Marketing Cloud", "Salesforce Service Cloud", "Salesforce Sales Cloud",
    
    // Tableau and Data Visualization
    "Tableau Desktop Specialist", "Tableau Desktop Certified Associate", "Tableau Server Certified Associate",
    "Power BI", "Qlik Sense", "Looker", "Grafana",
    
    // Cybersecurity Specialized
    "CISSP", "CISM", "CISA", "CEH", "OSCP", "GSEC", "GCIH", "GPEN",
    "CISSP Associate", "CCSP", "SSCP", "GSNA", "GIAC",
    
    // Other Cloud Providers
    "IBM Cloud", "IBM Certified", "Alibaba Cloud", "DigitalOcean", "Linode",
    
    // Programming and Development
    "Java Oracle Certified", "Python Institute", "JavaScript Certified", "React Certified",
    "Angular Certified", "Vue.js Certified", "Node.js Certified",
    
    // Database Specialized
    "MongoDB Certified", "Cassandra Certified", "Redis Certified", "Elasticsearch Certified",
    "Neo4j Certified", "PostgreSQL Certified", "MySQL Certified", 

    
    // Modern AI/ML & LLM Technologies
    "Llama 3.1", "Llama 3.2", "Claude 3.5 Sonnet", "GPT-4o mini", "Gemini 2.0", "o1-preview", "o1-mini",
    "Anthropic Claude", "Cohere Command", "AI21 Jurassic", "Meta Code Llama", "Mistral Large", 
    "Mistral Codestral", "DeepSeek Coder", "Qwen", "Baichuan", "ChatGLM", "Yi", "InternLM",
    "LangGraph", "LangSmith", "Crew AI", "AutoGen", "Semantic Kernel", "LlamaIndex",
    "Guidance", "LMQL", "Outlines", "Instructor", "Marvin", "DSPy", "Phoenix", "LiteLLM",
    "Together AI", "Beam", "OctoML", "Annoy", "ScaNN", "pgvector", "Redis Vector", 
    "ElasticSearch Vector", "MongoDB Atlas Vector Search", "vLLM", "Text Generation Inference", 
    "LocalAI", "Xinference", "LMStudio", "GPT4All", "Llama.cpp", "Whisper.cpp", "Candle", 
    "MLX", "ExLLamaV2", "AdaLoRA", "Prefix Tuning", "P-Tuning", "Prompt Tuning", "PEFT",
    "Unsloth", "Axolotl", "TRL", "DPO", "PPO", "Constitutional AI",
    "Superagi", "Multi-Agent Systems", "Tree of Thoughts", "Chain of Thought", "Self-Consistency", "Tool Use",
    "SDXL", "Flux", "Ideogram", "Leonardo AI", "Firefly", "Stable Video Diffusion", "Runway ML", 
    "Pika Labs", "LumaAI", "Haiper", "Kling", "ComfyUI", "Automatic1111", "InvokeAI", "Fooocus", 
    "ControlNet", "IP-Adapter", "ElevenLabs", "Murf", "Speechify", "Resemble AI", "Descript", 
    "Adobe Podcast", "Wav2Vec", "SpeechT5", "Bark", "MusicLM", "AudioCraft", "Suno AI",

    // Cloud & DevOps Technologies
    "Falco", "OPA", "Gatekeeper", "ArgoWorkflows", "Flux", "Operator Framework", "Kubebuilder", "KubeVirt",
    "Rancher Desktop", "Buildkite", "Concourse", "Spinnaker", "Harness", "Codefresh", "CircleCI Orbs",
    "CDK", "Bicep", "Terraform Cloud", "Atlantis", "Spacelift", "env0", "Scalr",
    "Tempo", "VictoriaMetrics", "LogQL", "TraceQL", "Honeycomb", "Lightstep", "New Relic One",
    "Datadog APM", "SkyWalking", "Signoz", "Uptrace", "Consul Connect", "AWS App Mesh", "Kuma", 
    "Traefik Mesh", "Open Service Mesh", "Gloo Mesh", "Anthos Service Mesh", "Cilium Service Mesh",
    "Grype", "Syft", "Aqua", "Twistlock", "Polaris", "Kube-bench", "Kube-hunter", "Kubesec",

    // Frontend & Mobile Technologies
    "Fresh", "T3 Stack", "Create T3 App", "Rome", "Biome", "Turbo", "Rush", "React Server Components", 
    "React 19", "Suspense", "Concurrent Features", "Zustand", "Valtio", "Jotai", "TanStack Query", 
    "React Testing Library", "Composition API", "Pinia", "VueUse", "Nuxt 3", "Nitro", "Expo Router", 
    "React Native 0.74", "Hermes", "Flipper", "Maestro", "Detox", "Flutter 3.x", "Dart 3.x", 
    "Riverpod", "Bloc", "GetX", "Provider", "Combine", "Xcode Cloud", "TestFlight", 
    "Compose Multiplatform", "Android Gradle Plugin", "Kotlin Multiplatform Mobile",

    // Database & Data Technologies
    "Neon", "Turso", "EdgeDB", "SurrealDB", "TigerGraph", "Amazon Neptune", "CosmosDB Gremlin", 
    "Apache Pinot", "TDengine", "M3DB", "Redis Streams", "Apache Storm", "Materialize", "RisingWave", 
    "Pathway", "Singer", "Meltano", "DataHub", "Apache Atlas", "Soda", "Monte Carlo", "Bigeye", "Datafold",

    // Backend & API Technologies
    "tRPC", "MessagePack", "FlatBuffers", "AsyncAPI", "JSON-LD", "HAL", "JSON:API", 
    "AdonisJS", "Remix", "T3 Stack", "Railway", "Render", "Fly.io", "Cloudflare Pages", 
    "Supabase Edge Functions",

    // Security & Compliance
    "CyberArk", "Beyond Trust", "Firebase Auth", "Supabase Auth", "Clerk", "NextAuth.js", "Passport.js", 
    "SAML", "Veracode", "Checkmarx", "WhiteSource", "Black Duck", "Mend", "Clair", "Anchore", 
    "Aqua Security", "Parrot OS", "BlackArch", "Pentoo", "BackBox",

    // Legacy & Enterprise Systems
    "IBM z/OS", "IBM i", "AS/400", "Natural ADABAS", "CICS", "IMS", "REXX", "HLASM", "PL/I", "RPG", 
    "COBOL/400", "CL", "DB2 for z/OS", "VSAM", "IDCAMS", "TSO/ISPF", "SDSF", "OMEGAMON", 
    "IBM MQ Series", "CICS Transaction Server", "Infor LN", "Infor M3", "IFS Applications", "Unit4", 
    "Sage X3", "Microsoft Dynamics GP", "Microsoft Dynamics NAV", "Epicor ERP", "QAD", "SYSPRO", 
    "Acumatica", "Rockwell FactoryTalk", "Wonderware", "Schneider Electric", "Siemens WinCC", "GE iFIX", 
    "Honeywell Experion", "Yokogawa CENTUM", "ABB System 800xA", "Emerson DeltaV", "Aveva PDMS", 
    "Aveva E3D", "Intergraph SmartPlant", "Bentley MicroStation", "Epic", "AllScripts", "athenahealth", 
    "NextGen", "eClinicalWorks", "MEDITECH", "CPSI", "Greenway Health", "Amazing Charts", 
    "GE Centricity", "Philips IntelliSpace", "Siemens Healthineers", "AGFA HealthCare",

    // Modern Development Tools
    "Cursor", "Windsurf", "Claude Dev", "CodeT5", "IntelliCode", "JetBrains Fleet", "Nova", "Zed", 
    "Helix", "Lapce", "Xi Editor", "Onivim", "Kakoune", "Bun", "pnpm", "Yarn Berry", "Bazel", "Buck", 
    "SBT", "Mix", "Hex", "PDM", "Mamba", "Conan", "vcpkg", "GitLab CLI", "Bitbucket Pipelines", 
    "Gitea", "Forgejo", "SourceHut", "Fossil", "Pijul", "Jujutsu", "Sapling", "Git LFS", "Git Hooks", 
    "Pre-commit", "Bun Test", "Deno Test", "AVA", "Tape", "QUnit", "Jasmine", "Karma", "WebdriverIO", 
    "TestCafe", "Selenium Grid", "Detox", "Cavy", "Fast Check", "JSCheck", "Hypothesis",

    // Emerging Technologies
    "Ethereum 2.0", "Polygon zkEVM", "StarkNet", "Sui", "Celestia", "Cosmos SDK", "Tendermint", "IBC", 
    "CosmWasm", "Arweave", "The Graph", "MakerDAO", "1inch", "OpenSea", "Eclipse Mosquitto", "HiveMQ", 
    "VerneMQ", "EMQX", "Apache Kafka for IoT", "ThingsBoard", "DeviceHive", "Kaa IoT", "Zephyr RTOS", 
    "FreeRTOS", "RT-Thread", "Mbed OS", "RIOT", "Contiki", "TinyOS", "Arduino Cloud", "Blynk", 
    "Particle", "Q#", "Forest", "Braket", "QuTiP", "ProjectQ", "OpenQASM", "XACC", 
    "Quantum Development Kit", "Google Quantum AI", "Unity XR", "Unreal Engine VR", "ARCore", "ARKit", 
    "Vuforia", "8th Wall", "A-Frame", "Three.js", "Babylon.js", "PlayCanvas", "WebXR", "OpenXR", "Meta SDK",

    // Professional Certifications
    "Terraform Associate", "Terraform Professional", "HashiCorp Vault Associate", "Docker Certified Associate", 
    "Kubernetes CKA", "Kubernetes CKAD", "Kubernetes CKS", "Istio Certified Associate", "CNCF Certified", 
    "Linux Foundation Certified", "SANS", "PenTest+", "CISMP", "CIPP", "CIPM", "CIPT", "ISO 27001 Lead Auditor", 
    "PSM I", "PSM II", "PSPO", "CSP", "SAFe Agilist", "SAFe POPM", "SAFe RTE", "PMI-PBA", "PRINCE2 Agile", 
    "ICAgile", "Disciplined Agile", "Snowflake SnowPro", "dbt Analytics Engineering", "Databricks Associate", 
    "Tableau Desktop Specialist", "Power BI Data Analyst", "Google Analytics Individual", 
    "Adobe Analytics", "Segment CDP", "Amplitude Analytics",



    // ---------------------  Good to keep  ------------------------------------------------------------------

    "AutoML", "Prompt Engineering", "Zero-Shot Learning", "Few-Shot Learning", "Self-Supervised Learning", 
    "Neural Architecture Search", "Federated Learning", "Edge AI", "Neuromorphic Computing", 
    "Quantum Machine Learning", "Explainable AI", "AI Model Compression", "Knowledge Distillation", 
    "Graph Neural Networks", "Multi-Modal AI", "Generative Agents", "Synthetic Data Generation", "Digital Twin AI",
    "AI Workflow Orchestration", "AI Model Monitoring", "Responsible AI", "Fairness in AI", "AI Ethics", "Bias Mitigation",
    "Privacy-Preserving Machine Learning", "Differential Privacy", "Homomorphic Encryption in AI", "Federated Analytics", 
    "AI Governance", "AI Compliance", "AI Risk Management", "AI Regulations", "Green AI", "Sustainable AI", "AI for Climate Tech", 
    "AI in Healthcare Diagnostics", "AI in Genomics", "AI in Drug Discovery", "Conversational AI Platforms", "AI Chatbots",
    "Voice AI Assistants", "AI Content Moderation", "AI for Cybersecurity", "AI Threat Detection", "AI-Powered SOC", 
    "Explainable Security AI", "AI in Finance Fraud Detection", "AI in Supply Chain Optimization", "AI in Manufacturing Automation", 
    "AI-Driven Robotics", "Collaborative Robots", "Autonomous Drones", "Swarm Robotics", "AI-Driven Edge Devices", "5G AI Integration", 
    "AI in IoT", "AI in AR/VR", "Immersive AI Experiences", "Spatial AI", "Contextual AI", "Emotion AI", "Affective Computing", "Behavioral AI", 
    "Predictive AI Systems", "Causal AI", "Simulation AI", "AI-Driven Personalization", "AI Recommendation Systems", "AI in Smart Cities", 
    "AI in Autonomous Vehicles", "Driver Monitoring AI", "AI for Insurance", "AI for Real Estate", "AI in Agriculture Tech", "AI in Energy Optimization",
    "AI in Retail Analytics", "AI-powered Marketing Tools", "AI-powered HR Tech", "AI Candidate Screening", "AI Resume Parsing", "AI Coding Assistants", 
    "AI Test Automation", "AI Design Tools", "AI for Education", "AI Tutoring Systems", "AI Grading Systems", "AI in LawTech", "AI in Contract Analysis",
    "AI in Compliance Monitoring", "AI-powered Virtual Companions", "AI in Gaming NPCs", "Ethical Hacking AI", "AI-powered Red Teaming",
    "Explainable Cyber Defense", "AI for Threat Hunting", "Post-Quantum Cryptography", "Quantum Networking", "6G Networks", 
    "Satellite Internet Technologies", "Low-Earth Orbit Connectivity", "Edge Networking", "Mesh Networking", "Intent-Based Networking", 
    "Software-Defined Perimeter", "Secure Access Service Edge", "Zero Trust Networking", "Extended Detection and Response", 
    "Security Information and Event Management", "Deception Technology", "Cloud-Native Security", "AI Cyber Range", "AI-driven Incident Response", 
    "AI-driven Phishing Detection", "AI-driven Malware Analysis", "AI-driven Threat Intelligence", "AI-driven Insider Threat Detection", 
    "AI-powered Identity Protection", "AI-powered Access Control", "Privacy Engineering", "Synthetic Identity Fraud Detection", 
    "Dark Web Monitoring AI", "Cyber Deception AI", "AI-driven Compliance Auditing", "AI-driven Penetration Testing", "AI-powered SOC Automation",
    "AI-powered Bug Bounty", "Neuro-Symbolic AI", "Commonsense AI", "World Models", "Memory-Augmented Neural Networks", "Few-Shot Reinforcement Learning", 
    "Meta-Reinforcement Learning", "Neuroevolution", "Evolutionary AI", "Self-Evolving Agents", "AI Self-Healing Systems", "Continual Learning",
    "Life-Long Learning AI", "AI Model Lifecycle Management", "AI Infrastructure as Code", "AI Model Registry", "AI Deployment Pipelines", "AI Security Hardening",
    "AI-based Attack Surface Management", "AI in Disaster Management", "AI in Crisis Response", "AI-powered Early Warning Systems", "AI for Space Exploration",
    "AI in Astronomy", "AI in Climate Modeling", "AI for Oceanography", "AI-powered Mental Health Tools", "AI in Wellness Tech", "Compassionate AI", 
    "AI for Accessibility", "AI for Disability Tech", "AI-powered Language Accessibility", "Sign Language AI", "AI-Powered Transcription",
    "AI-driven Translation Systems", "AI for Multilingual Communication", "AI-powered Negotiation Agents", "AI-powered Creativity Tools",
    "AI-powered Art Generation", "AI-powered Music Composition", "AI in Film Making", "AI in Content Creation", "AI-powered Influencer Tools",
    "AI-driven Social Media Monitoring", "AI-powered Reputation Management", "AI for Political Campaigns", "AI in Policy Making", "AI in Diplomacy",
    "Geopolitical AI", "Military AI", "AI for Defense Simulations", "AI-powered Cyber Warfare", "AI-powered Surveillance Systems", 
    "Ethical AI for Defense", "AI Alignment Research", "AI Safety Research", "AI Interpretability Research", "AI-powered Knowledge Graphs",
    "AI Semantic Search", "AI-powered Scientific Discovery", "AI for Particle Physics", "AI in Biotechnology", "AI-powered Nanotechnology", 
    "AI-driven Material Science", "AI-powered Robotics Surgery", "AI for Aging Research", "AI in Food Tech", "AI-driven Personalized Nutrition",
    "AI in Smart Homes", "AI-driven Energy Storage", "AI for Grid Optimization",

    // Soft skills

    // Soft Skills (Expanded with Synonyms & Slang)
    "Communication", "Good Communication", "Strong Communication", "Excellent Communication", "Verbal Communication", "Written Communication", "Presentation Skills", "Public Speaking", "Storytelling", "Negotiation", 
    "Collaboration", "Teamwork", "Team Player", "Great Team Player", "Strong Collaborator", "Cross-functional Collaboration", "Partnering", "Networking", 
    "Leadership", "Team Leader", "Leading Teams", "Leadership Skills", "Inspiring Leader", "Decision Making", "Strategic Leadership", "Mentorship", "Coaching", 
    "Problem Solving", "Critical Thinking", "Analytical Thinking", "Creative Thinking", "Innovative Thinking", "Troubleshooting", "Logical Reasoning", "Design Thinking", 
    "Adaptability", "Flexibility", "Resilience", "Agility", "Open-mindedness", "Versatility", "Change Management", 
    "Time Management", "Prioritization", "Task Management", "Productivity", "Organization Skills", "Multitasking", 
    "Work Ethic", "Strong Work Ethic", "Accountability", "Responsibility", "Reliability", "Dependability", "Discipline", "Consistency", 
    "Empathy", "Compassion", "Kindness", "Supportive", "Helpful", "Caring", "Respectful", "Active Listening", 
    "Conflict Resolution", "Mediation", "Negotiation Skills", "Diplomacy", "Handling Pressure", "Stress Management", 
    "Creativity", "Innovation", "Brainstorming", "Visionary Thinking", "Out-of-the-box Thinking", "Originality", 
    "Interpersonal Skills", "Social Skills", "Relationship Building", "Bonding", "Great Bonding", "Rapport Building", "People Skills", 
    "Motivation", "Self-Motivation", "Driven", "Proactive", "Initiative", "Goal-Oriented", "Positive Attitude", 
    "Attention to Detail", "Detail-Oriented", "Accuracy", "Precision", "Quality Focused", "Thoroughness", 
    "Customer Service", "Client Relations", "Customer Success", "User Focus", "Customer Centric", 
    "Emotional Intelligence", "Self-Awareness", "Self-Regulation", "Social Awareness", "Relationship Management", 
    "Learning Agility", "Continuous Learning", "Curiosity", "Knowledge Sharing", "Growth Mindset", 
    "Team Bonding", "Helping Nature", "Supportive Teammate", "Buddy", "Friendly", "Approachable", 
    "Trustworthy", "Honest", "Integrity", "Transparent", "Fair", "Ethical Awareness"

];

function getTotalSkillsCount() {
  return ULTIMATE_IT_SKILLS_DATABASE.length;
}

function isValidSkill(skill) {
  return ULTIMATE_IT_SKILLS_DATABASE.includes(skill.toLowerCase());
}

module.exports = {
  ULTIMATE_IT_SKILLS_DATABASE,
  getTotalSkillsCount,
  isValidSkill
};
