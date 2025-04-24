// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById('darkModeToggle');
const icon = toggleBtn.querySelector('i');

// Start in dark mode by default
document.body.classList.add('dark-mode');
icon.classList.remove('fa-moon');
icon.classList.add('fa-sun');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// ✨ Interactive Background Pointer Movement
document.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  document.body.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
});

// ⏳ Loader with delay
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 500);
    }, 1000);
  }

  // 👨‍💻 Typing Effect
  new Typed("#typed-text", {
    strings: [
      "Aspiring Data Scientist or Data Analyst",
      "Specialist in NLP, AI and Machine Learning",
      "Proficient in Python, SQL, and Power BI",
      "Skilled in Data Visualization and Predictive Insights"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|"
  });

  // 🚀 Project Swiper
  new Swiper(".mySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    effect: "slide",
    loopFillGroupWithBlank: true,
    grabCursor: true,
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  

  // 📜 Certifications Swiper (Clean Version)
  new Swiper(".certSwiper", {
    grabCursor: true,
    centeredSlides: false, // set to false to align cards evenly
    slidesPerView: 1.2, // or "auto" if using fixed widths
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }
  });
  

// 🎯 Certificate Click-to-Zoom Modal Logic
const certCards = document.querySelectorAll('.cert-card img');
const certModal = document.getElementById('certModal');
const certModalImg = document.getElementById('certModalImg');
const closeModal = document.getElementById('closeModal');

// Open Modal on Image Click
certCards.forEach(img => {
  img.addEventListener('click', () => {
    certModal.style.display = 'flex';
    certModalImg.src = img.src;
    certModalImg.alt = img.alt;
  });
});

// Close Modal with Close Button
closeModal.addEventListener('click', () => {
  certModal.style.display = 'none';
});

// Close Modal by Clicking Outside the Image
certModal.addEventListener('click', (e) => {
  if (e.target === certModal) {
    certModal.style.display = 'none';
  }
});

// Close Modal on ESC Key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    certModal.style.display = 'none';
  }
});



  // 🎉 Optional: tsParticles
  if (window.tsParticles) {
    tsParticles.load("tsparticles", {
      fullScreen: { enable: false },
      background: { color: "transparent" },
      particles: {
        number: { value: 60 },
        size: { value: 3 },
        color: { value: "#00f7ff" },
        links: { enable: true, distance: 120, color: "#00f7ff", opacity: 0.4 },
        move: { enable: true, speed: 1.2 },
      },
    });
  }

  tsParticles.load("tsparticles", {
    fullScreen: { enable: false },
    background: { color: "transparent" },
    particles: {
      number: { value: 60 },
      size: { value: 3 },
      color: { value: "#00f7ff" },
      links: {
        enable: true,
        distance: 120,
        color: "#00f7ff",
        opacity: 0.4,
      },
      move: {
        enable: true,
        speed: 1.2,
      },
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 }
      }
    },
  });

  const allCertSlides = document.querySelectorAll('.swiper-slide.cert-card');

  allCertSlides.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      if (!card.classList.contains('swiper-slide-active')) return;
  
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / 10;
      const rotateY = (x - centerX) / 10;
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });
  
  // 🔍 Highlight current section in nav on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

function activateNavLink() {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 80; // adjust based on header height
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", activateNavLink);

window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = `${scrollPercent}%`;
  });
  
  // 🔝 Show/hide Back to Top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

  // === Project Modal Logic ===
  const projectData = {
    1: {
      title: "Patient Case Similarity for CHD Risk Prediction",
      description: [
        "Engineered a CHD prediction pipeline combining patient case similarity with ML classifiers.",
        "Applied K-Means clustering and Euclidean distance to identify similar past cases for personalized diagnosis.",
        "Evaluated multiple models (Random Forest, XGBoost, SVM, Logistic Regression); Random Forest achieved 99% accuracy.",
        "Integrated Gradio to build an intuitive medical UI for real-time risk prediction.",
        "Performed extensive preprocessing: missing value treatment, encoding, normalization, and EDA."
      ],
      tech: "Tools: Python, Pandas, Scikit-learn, XGBoost, Gradio, Matplotlib, Seaborn",
      link: "https://github.com/gankidisaicharan/Patient-Case-Similarity"
    },
    2: {
      title: "Early Prediction of Diabetes Using Machine Learning",
      description: [
        "Constructed a full ML pipeline to predict diabetes risk based on patient attributes.",
        "Compared multiple classifiers including Decision Tree, KNN, Logistic Regression, AdaBoost, and XGBoost.",
        "XGBoost outperformed others with 91.48% accuracy and strong ROC-AUC performance.",
        "Performed comprehensive preprocessing: encoding, balancing, scaling, and feature selection.",
        "Deployed the final model with Gradio to enable user-friendly medical risk assessment."
      ],
      tech: "Tools: Python, XGBoost, Scikit-learn, Pandas, Seaborn, Matplotlib, Gradio",
      link: "https://github.com/gankidisaicharan/Diabetics-early-disease-prediction"
    },
    3: {
      title: "AI-Powered Key Concept Extraction from Educational Videos",
      description: [
        "Designed a full video-to-text pipeline using moviepy and pydub to extract and process audio from .mp4 files.",
        "Transcribed audio to text using SpeechRecognition, then applied RAKE (Rapid Automatic Keyword Extraction) for concept mining.",
        "Matched extracted concepts with their timestamp in the video by aligning transcript chunks with video duration.",
        "Final output: a DataFrame mapping each concept to its exact appearance time in the video — aiding educational searchability.",
        "Bonus: Capable of scaling for academic or e-learning platforms to enhance content navigation and summarization."
      ],
      tech: "Tools: Python, moviepy, pydub, SpeechRecognition, RAKE, NLTK, pandas, spaCy",
      link: "https://github.com/gankidisaicharan/video-analysis"
    },
    4: {
      title: "Stock Price Prediction using LSTM Networks",
      description: [
        "Developed an LSTM-based neural network to forecast stock prices using historical market data collected via yfinance.",
        "Engineered technical indicators and normalized data using MinMaxScaler to improve model learning and consistency.",
        "Structured the LSTM with two layers (64 and 32 units) followed by dense output, optimized with Adam optimizer for regression accuracy.",
        "Trained and validated the model using a train-test split and evaluated with RMSE — achieving ~0.63 on unseen test data.",
        "Visualized actual vs. predicted stock prices and returns to interpret model performance and market trends.",
        "Proposed enhancements include CNN-LSTM hybrids and sentiment-based feature fusion for future work."
      ],
      tech: "Tools: Python, yfinance, LSTM, TensorFlow, Keras, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn",
      link: "https://github.com/gankidisaicharan/Stock-Price-Prediction"
    },
    5: {
      title: "Breast Cancer Detection with CNN, Transfer Learning & Model Ensembling",
      description: [
        "Developed a breast cancer diagnosis system using ultrasound images, applying deep learning techniques for precise image classification.",
        "Implemented and compared three model types: custom CNN, transfer learning with VGG16 and InceptionV3, and an ensemble model using bagging techniques.",
        "The dataset included 780 labeled mammograms (normal, benign, malignant) from the Breast Ultrasound Images Dataset (BUSI).",
        "Preprocessing involved image resizing, normalization, augmentation, and validation splitting using TensorFlow’s ImageDataGenerator.",
        "Ensemble of 5 CNNs yielded superior accuracy compared to individual models, enhancing robustness and reducing overfitting.",
        "Achieved strong classification performance on unseen validation data — demonstrating the feasibility of AI-assisted radiological diagnostics.",
        "Deployed final model through a web-based UI for real-time medical image inference."
      ],
      tech: "Tools: Python, TensorFlow, Keras, VGG16, InceptionV3, CNN, Ensemble Learning, Matplotlib, PIL, Pandas",
      link: "https://github.com/gankidisaicharan/Breast-Cancer-detection"
    },
    6: {
      title: "Forecasting Currency Exchange Rates using LSTM and Time Series Analysis",
      description: [
        "Developed a robust financial forecasting model by leveraging historical USD-INR data and deep learning via Long Short-Term Memory (LSTM) networks.",
        "Cleaned and transformed raw forex data: handled missing values, scaled features with MinMaxScaler, and generated time-dependent sequences.",
        "Structured and trained a multi-layered LSTM model using TensorFlow/Keras to capture sequential dependencies in currency movements.",
        "Evaluated model performance with metrics like RMSE and visualized predicted vs. actual trends using Matplotlib and Seaborn.",
        "Applied sliding window approach to create temporal feature sets and implemented train-test splits for realistic evaluation.",
        "Visualized both prediction accuracy and model loss to assess convergence and generalization over epochs.",
        "Extended potential use cases to forex strategy backtesting, automated trading systems, and financial risk assessment."
      ],
      tech: "Tools: Python, LSTM, TensorFlow, Keras, Pandas, NumPy, Matplotlib, Seaborn, MinMaxScaler",
      link: "https://github.com/gankidisaicharan/Currency-Prediction"
    }
  };
  const projectCards = document.querySelectorAll('.project-card');
  const projectModal = document.getElementById('projectModal');
  const closeProjectModal = document.getElementById('closeProjectModal');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.project;
      const data = projectData[id];
      if (data) {
        // Modal Title with dark mode glow toggle
        const modalTitle = document.getElementById('modalTitle');
        modalTitle.textContent = data.title;
        if (document.body.classList.contains('dark-mode')) {
          modalTitle.classList.add('glow-title');
        } else {
          modalTitle.classList.remove('glow-title');
        }

        // Modal Tech: Render as tags
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = "";
        const techList = data.tech.replace("Tools: ", "").split(',');
        techList.forEach(tool => {
          const span = document.createElement('span');
          span.className = 'tool-tag';
          span.textContent = tool.trim();
          techContainer.appendChild(span);
        });

        document.getElementById('modalLink').href = data.link;

        // --- Insert project details as animated bullet points ---
        const detailList = document.getElementById('projectModalDetails');
        detailList.innerHTML = "";

        if (Array.isArray(data.description)) {
          data.description.forEach((detail, index) => {
            const li = document.createElement('li');
            li.textContent = detail;
            li.style.opacity = "0";
            li.style.transform = "translateY(10px)";
            li.style.animation = `fadeInUp 0.4s ease forwards`;
            li.style.animationDelay = `${(index + 1) * 0.1}s`;
            detailList.appendChild(li);
          });
        } else {
          const li = document.createElement('li');
          li.textContent = data.description;
          detailList.appendChild(li);
        }

        projectModal.style.display = 'flex';
      }
    });
  });

  closeProjectModal.addEventListener('click', () => {
    projectModal.style.display = 'none';
  });

  // Close modal on outside click
  window.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.style.display = 'none';
    }
  });

  // Close modal on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      projectModal.style.display = 'none';
    }
  });
  
  
  
  const wavePath = document.getElementById('wavePath');

  function setWaveColor() {
    const isDark = document.body.classList.contains('dark-mode');
    wavePath.setAttribute('fill', isDark ?  '#f8f9fb' : '#000');
  }
  
  // Initial fill
  setWaveColor();
  
  // Reapply on dark mode toggle
  toggleBtn.addEventListener('click', () => {
    setTimeout(setWaveColor, 200); // small delay to allow class switch
  });
  
  const floatingResumeCTA = document.querySelector('.floating-resume-cta');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      floatingResumeCTA.style.display = 'block';
    } else {
      floatingResumeCTA.style.display = 'none';
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {
    const rings = document.querySelectorAll(".ring-fill");
  
    rings.forEach((circle) => {
      const percent = parseFloat(circle.dataset.percent);
      const radius = 70;
      const circumference = 2 * Math.PI * radius;
  
      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;
  
      const animate = () => {
        let progress = 0;
        const step = () => {
          const offset = circumference * (1 - progress / 100);
          circle.style.strokeDashoffset = offset;
  
          if (progress < percent) {
            progress += 1;
            requestAnimationFrame(step);
          }
        };
        step();
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.6 });
  
      observer.observe(circle);
    });
  });
  
  
// === Experience Modal Data ===
const experienceData = {
  1: {
    title: "Business Analyst Intern",
    company: "SRCOSMOS LLC",
    duration: "Apr 2024 – Present · Remote · Chicago, IL, USA",
    details: [
      "Conducted in-depth analysis of client engagement and revenue trends, leading to a 15% increase in forecasting accuracy.",
      "Designed dashboards and KPI reports using Power BI and Excel across 4 departments.",
      "Wrote and optimized complex SQL queries on large datasets (10M+ rows), reducing report time by 40%.",
      "Collaborated with cross-functional teams to implement scalable analytics solutions.",
      "Presented executive-level insights using data storytelling to influence strategic decisions."
    ],
    tools: ["Power BI", "Excel", "SQL", "Data Modeling", "Stakeholder Communication"]
  },

  2: {
    title: "Data Engineer",
    company: "ADAA IT Solutions Pvt Ltd",
    duration: "Apr 2022 – Dec 2023 · Bengaluru, India",
    details: [
      "Developed automated ETL pipelines using Python and SQL, improving data availability by 35%.",
      "Managed relational databases (MySQL, PostgreSQL) and automated workflows cutting manual work by 50%.",
      "Built cloud-based solutions using AWS (S3, Lambda, RDS).",
      "Created dynamic dashboards in Tableau and Power BI for real-time tracking.",
      "Collaborated with data scientists to deliver validated datasets for ML training and reporting."
    ],
    tools: ["Python", "SQL", "AWS", "Power BI", "Tableau", "ETL"]
  },

  3: {
    title: "Data Science Intern",
    company: "SmartKnower",
    duration: "Jan 2021 – May 2021 · Remote · Bengaluru, India",
    details: [
      "Built a COVID-19 forecasting model using Python & Prophet, visualized via Tableau dashboards.",
      "Developed an image classifier (Cats vs Dogs, Human vs Horse) using MobileNetV2 and Transfer Learning.",
      "Collected datasets using Bing Downloader & Flickr API, preprocessed with OpenCV.",
      "Deployed ML pipelines using Streamlit for end-to-end demos.",
      "Strengthened skills in deep learning, data wrangling, and model deployment."
    ],
    tools: ["Python", "Prophet", "OpenCV", "Streamlit", "Tableau", "Transfer Learning"]
  }
};

// === DOM Elements
const expCards = document.querySelectorAll('.experience-card');
const expModal = document.getElementById('experienceModal');
const closeExpModal = document.getElementById('closeExperienceModal');

// === Event Listener on Cards
expCards.forEach(card => {
  card.addEventListener('click', () => {
    const id = card.dataset.experience;
    const data = experienceData[id];

    if (data) {
      document.getElementById('expModalTitle').textContent = data.title;
      document.getElementById('expModalCompany').textContent = data.company;
      document.getElementById('expModalDuration').textContent = data.duration;

      // Inject bullet points
      const detailList = document.getElementById('expModalDetails');
      detailList.innerHTML = "";
      data.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailList.appendChild(li);
      });

      // Inject tools
      const tools = document.getElementById('expModalTools');
      tools.innerHTML = "";
      data.tools.forEach(tool => {
        const tag = document.createElement('span');
        tag.className = 'tool-tag';
        tag.textContent = tool;
        tools.appendChild(tag);
      });

      // Show modal
      expModal.style.display = 'flex';
    }
  });
});

// === Close Modal Logic
closeExpModal.addEventListener('click', () => {
  expModal.style.display = 'none';
});

// === Optional: Close modal on outside click
window.addEventListener('click', (e) => {
  if (e.target === expModal) {
    expModal.style.display = 'none';
  }
});

// === Optional: ESC key to close
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    expModal.style.display = 'none';
  }
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-up");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".experience-card").forEach(card => {
  observer.observe(card);
});



// 👋 Console
console.log("🚀 Welcome to Sai Charan's Portfolio! Let’s connect.");


// Add glow-title style for modal title (dark mode)
const style = document.createElement('style');
style.innerHTML = `
  .glow-title {
    color: #00f7ff;
    text-shadow: 0 0 8px #00f7ff;
  }
`;
document.head.appendChild(style);