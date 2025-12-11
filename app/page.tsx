'use client'

import { FaRocket, FaBrain, FaCloud, FaMobile, FaShieldAlt, FaChartLine, FaCheckCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-lg z-50 border-b border-primary/20">
        <div className="container-custom flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-gradient">TechVision</div>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-secondary transition-colors">الرئيسية</a>
            <a href="#services" className="hover:text-secondary transition-colors">الخدمات</a>
            <a href="#about" className="hover:text-secondary transition-colors">من نحن</a>
            <a href="#portfolio" className="hover:text-secondary transition-colors">الأعمال</a>
            <a href="#contact" className="hover:text-secondary transition-colors">اتصل بنا</a>
          </div>
          <button className="bg-gradient-to-r from-primary to-secondary px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
            ابدأ الآن
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-padding pt-32 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                مستقبل <span className="text-gradient">التكنولوجيا</span> يبدأ هنا
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                نحن نبني حلولاً تقنية مبتكرة تحول الأفكار إلى واقع رقمي. متخصصون في الذكاء الاصطناعي، الحوسبة السحابية، وتطوير التطبيقات العالمية.
              </p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform">
                  استكشف خدماتنا
                </button>
                <button className="border-2 border-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors">
                  تواصل معنا
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl glow-effect flex items-center justify-center">
                <FaRocket className="text-9xl text-secondary animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-b from-transparent to-primary/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">خدماتنا المتميزة</h2>
            <p className="text-xl text-gray-400">حلول تقنية شاملة لتحويل أعمالك</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBrain className="text-5xl text-primary" />,
                title: "الذكاء الاصطناعي",
                description: "نطور حلول ذكاء اصطناعي متقدمة تساعد في أتمتة العمليات وتحليل البيانات"
              },
              {
                icon: <FaCloud className="text-5xl text-secondary" />,
                title: "الحوسبة السحابية",
                description: "بنية تحتية سحابية قابلة للتطوير وآمنة لجميع احتياجات عملك"
              },
              {
                icon: <FaMobile className="text-5xl text-accent" />,
                title: "تطوير التطبيقات",
                description: "تطبيقات موبايل وويب حديثة بتصميم عصري وأداء عالي"
              },
              {
                icon: <FaShieldAlt className="text-5xl text-primary" />,
                title: "الأمن السيبراني",
                description: "حماية متقدمة لبياناتك وأنظمتك من التهديدات الإلكترونية"
              },
              {
                icon: <FaChartLine className="text-5xl text-secondary" />,
                title: "تحليل البيانات",
                description: "استخراج رؤى قيمة من بياناتك لاتخاذ قرارات مستنيرة"
              },
              {
                icon: <FaRocket className="text-5xl text-accent" />,
                title: "التحول الرقمي",
                description: "مرافقتك في رحلة التحول الرقمي الشامل لمؤسستك"
              }
            ].map((service, index) => (
              <div key={index} className="bg-dark/50 border border-primary/20 rounded-2xl p-8 card-hover backdrop-blur-sm">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                TechVision هي شركة تكنولوجيا عالمية رائدة تأسست بهدف تقديم حلول مبتكرة تدفع الشركات نحو المستقبل الرقمي.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                مع فريق من الخبراء المتخصصين في مختلف المجالات التقنية، نساعد الشركات على تحقيق أهدافها من خلال التكنولوجيا المتطورة والابتكار المستمر.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-primary/10 rounded-xl">
                  <div className="text-4xl font-bold text-gradient mb-2">500+</div>
                  <div className="text-gray-400">مشروع منجز</div>
                </div>
                <div className="text-center p-6 bg-secondary/10 rounded-xl">
                  <div className="text-4xl font-bold text-gradient mb-2">50+</div>
                  <div className="text-gray-400">عميل سعيد</div>
                </div>
                <div className="text-center p-6 bg-accent/10 rounded-xl">
                  <div className="text-4xl font-bold text-gradient mb-2">15+</div>
                  <div className="text-gray-400">سنة خبرة</div>
                </div>
                <div className="text-center p-6 bg-primary/10 rounded-xl">
                  <div className="text-4xl font-bold text-gradient mb-2">30+</div>
                  <div className="text-gray-400">خبير تقني</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-full bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl p-12 glow-effect">
                <div className="space-y-6">
                  {[
                    "ابتكار مستمر في الحلول التقنية",
                    "فريق متخصص ذو خبرة عالمية",
                    "جودة عالية في التنفيذ",
                    "دعم فني على مدار الساعة"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 bg-dark/50 p-4 rounded-xl backdrop-blur-sm">
                      <FaCheckCircle className="text-3xl text-secondary flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding bg-gradient-to-b from-transparent to-primary/5">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">أعمالنا المميزة</h2>
            <p className="text-xl text-gray-400">مشاريع نفخر بإنجازها</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "منصة ذكاء اصطناعي",
                category: "AI & Machine Learning",
                description: "منصة متقدمة لتحليل البيانات باستخدام الذكاء الاصطناعي"
              },
              {
                title: "تطبيق التجارة الإلكترونية",
                category: "Mobile & Web",
                description: "تطبيق شامل للتجارة الإلكترونية مع تجربة مستخدم استثنائية"
              },
              {
                title: "نظام إدارة المؤسسات",
                category: "Enterprise Solution",
                description: "نظام ERP متكامل للشركات الكبرى"
              },
              {
                title: "منصة التعليم الإلكتروني",
                category: "EdTech",
                description: "منصة تعليمية تفاعلية مع خاصية البث المباشر"
              },
              {
                title: "نظام أمني متقدم",
                category: "Cybersecurity",
                description: "حل أمني شامل لحماية البنية التحتية الرقمية"
              },
              {
                title: "تطبيق الصحة الذكية",
                category: "HealthTech",
                description: "تطبيق صحي متكامل مع خاصية الاستشارات عن بعد"
              }
            ].map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl card-hover cursor-pointer">
                <div className="h-64 bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
                  <FaRocket className="text-6xl text-white group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute inset-0 bg-dark/90 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center p-6">
                  <div className="text-sm text-secondary mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-400">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-xl text-gray-400">نحن هنا لمساعدتك في تحقيق أهدافك</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                    className="w-full bg-dark/50 border border-primary/20 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full bg-dark/50 border border-primary/20 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="w-full bg-dark/50 border border-primary/20 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="رسالتك"
                    rows={5}
                    className="w-full bg-dark/50 border border-primary/20 rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-secondary px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-opacity">
                  إرسال الرسالة
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-dark/50 border border-primary/20 rounded-xl card-hover">
                <FaEnvelope className="text-3xl text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
                  <p className="text-gray-400">info@techvision.com</p>
                  <p className="text-gray-400">support@techvision.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-dark/50 border border-primary/20 rounded-xl card-hover">
                <FaPhone className="text-3xl text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">الهاتف</h3>
                  <p className="text-gray-400">+966 50 123 4567</p>
                  <p className="text-gray-400">+971 4 567 8901</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-dark/50 border border-primary/20 rounded-xl card-hover">
                <FaMapMarkerAlt className="text-3xl text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">العنوان</h3>
                  <p className="text-gray-400">الرياض، المملكة العربية السعودية</p>
                  <p className="text-gray-400">دبي، الإمارات العربية المتحدة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding bg-dark border-t border-primary/20">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-3xl font-bold text-gradient mb-4">TechVision</div>
              <p className="text-gray-400 leading-relaxed">
                نبني المستقبل بالتكنولوجيا والابتكار
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-400 hover:text-secondary transition-colors">الرئيسية</a>
                <a href="#services" className="block text-gray-400 hover:text-secondary transition-colors">الخدمات</a>
                <a href="#about" className="block text-gray-400 hover:text-secondary transition-colors">من نحن</a>
                <a href="#portfolio" className="block text-gray-400 hover:text-secondary transition-colors">الأعمال</a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">الخدمات</h4>
              <div className="space-y-2">
                <div className="text-gray-400">الذكاء الاصطناعي</div>
                <div className="text-gray-400">الحوسبة السحابية</div>
                <div className="text-gray-400">تطوير التطبيقات</div>
                <div className="text-gray-400">الأمن السيبراني</div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">تابعنا</h4>
              <div className="flex gap-4">
                <a href="#" className="text-3xl text-gray-400 hover:text-primary transition-colors">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-3xl text-gray-400 hover:text-secondary transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="text-3xl text-gray-400 hover:text-accent transition-colors">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary/20 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechVision. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
