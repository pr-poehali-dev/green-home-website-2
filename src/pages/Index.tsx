import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/04112904-6381-486e-bf36-548e9443f9a8/files/256b0766-19fd-4e7f-8423-962c27c0c295.jpg";
const PLANTS_IMAGE = "https://cdn.poehali.dev/projects/04112904-6381-486e-bf36-548e9443f9a8/files/629bb6b7-d9df-4bcd-8137-3d13407cadd4.jpg";

const services = [
  {
    icon: "Home",
    title: "Озеленение квартир",
    desc: "Создаём живые уголки природы в вашем доме. Подбираем растения под освещение, стиль интерьера и образ жизни хозяев.",
    tags: ["Фитодизайн", "Подбор горшков", "Расстановка"],
  },
  {
    icon: "Building2",
    title: "Оформление офисов",
    desc: "Превращаем рабочее пространство в комфортную среду. Растения повышают продуктивность и создают приятную атмосферу.",
    tags: ["Зонирование", "Корпоративный стиль", "Фитостены"],
  },
  {
    icon: "Scissors",
    title: "Уход и пересадка",
    desc: "Регулярный профессиональный уход: полив, подкормка, обрезка, пересадка. Ваши растения всегда здоровы и красивы.",
    tags: ["Абонемент", "Выезд на дом", "Лечение"],
  },
];

const team = [
  {
    name: "Анна Смирнова",
    role: "Фитодизайнер",
    desc: "Более 8 лет создаёт ботанические интерьеры. Специализируется на тропических видах и авторских композициях.",
    emoji: "🌿",
    color: "bg-green-pale",
  },
  {
    name: "Иван Петров",
    role: "Специалист по уходу",
    desc: "Агроном по образованию. Знает, как сохранить здоровье любого растения и справиться с самыми сложными случаями.",
    emoji: "🪴",
    color: "bg-beige-warm",
  },
  {
    name: "Мария Кузнецова",
    role: "Менеджер проектов",
    desc: "Координирует проекты от идеи до финала. Обеспечивает точность сроков и безупречный сервис для каждого клиента.",
    emoji: "✨",
    color: "bg-accent",
  },
];

const plants = [
  {
    name: "Монстера деликатесная",
    latin: "Monstera deliciosa",
    difficulty: "Лёгко",
    light: "Яркий рассеянный",
    water: "Раз в неделю",
    humidity: "Высокая",
    desc: "Один из самых эффектных комнатных питомцев. Крупные резные листья украсят любой интерьер — от лофта до классики.",
    tag: "Популярное",
    tagColor: "bg-green-pale text-green-deep",
    emoji: "🌿",
  },
  {
    name: "Сансевиерия",
    latin: "Sansevieria trifasciata",
    difficulty: "Очень легко",
    light: "Любое",
    water: "Раз в 2-3 недели",
    humidity: "Низкая",
    desc: "«Тёщин язык» — почти неубиваемое растение. Очищает воздух, терпит забывчивых хозяев и выглядит стильно.",
    tag: "Для новичков",
    tagColor: "bg-beige-warm text-green-mid",
    emoji: "🪴",
  },
  {
    name: "Фикус лировидный",
    latin: "Ficus lyrata",
    difficulty: "Средне",
    light: "Яркий",
    water: "Раз в 5-7 дней",
    humidity: "Средняя",
    desc: "Трендовое дерево для просторных комнат. Крупные глянцевые листья создают ощущение дорогого ботанического сада.",
    tag: "Тренд",
    tagColor: "bg-accent text-green-deep",
    emoji: "🌳",
  },
  {
    name: "Потос золотистый",
    latin: "Epipremnum aureum",
    difficulty: "Очень легко",
    light: "Полутень",
    water: "Раз в неделю",
    humidity: "Средняя",
    desc: "Ампельное растение с сердцевидными листьями. Быстро растёт, красиво свисает, прекрасно чувствует себя даже в темноте.",
    tag: "Для ампели",
    tagColor: "bg-green-pale text-green-deep",
    emoji: "💚",
  },
  {
    name: "Замиокулькас",
    latin: "Zamioculcas zamiifolia",
    difficulty: "Лёгко",
    light: "Полутень/тень",
    water: "Раз в 2 недели",
    humidity: "Низкая",
    desc: "ZZ-plant — идеальный офисный жилец. Глянцевые тёмно-зелёные листья без капризов и требовательности.",
    tag: "Для офиса",
    tagColor: "bg-beige-warm text-green-mid",
    emoji: "🌱",
  },
  {
    name: "Орхидея фаленопсис",
    latin: "Phalaenopsis",
    difficulty: "Средне",
    light: "Рассеянный",
    water: "Раз в 10 дней",
    humidity: "Средняя",
    desc: "Королева подоконника. Цветёт несколько месяцев подряд, создаёт ощущение роскоши при правильном уходе.",
    tag: "Цветущее",
    tagColor: "bg-accent text-green-deep",
    emoji: "🌸",
  },
];

const difficultyColor: Record<string, string> = {
  "Очень легко": "text-green-mid",
  "Лёгко": "text-green-main",
  "Средне": "text-beige-dark",
};

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePlant, setActivePlant] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream font-golos overflow-x-hidden">

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-2 rounded-2xl shadow-sm border border-beige-mid">
            <img src="https://cdn.poehali.dev/projects/04112904-6381-486e-bf36-548e9443f9a8/bucket/02e8cc00-ab59-431a-926e-b95d53031924.png" alt="Зелёный Дом" className="h-12 w-12 object-contain" />
            <span className="font-cormorant text-xl font-semibold text-green-main tracking-wide">Зелёный Дом</span>
          </div>

          <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-beige-mid">
            {[["hero","Главная"],["services","Услуги"],["plants","Каталог"],["team","Команда"],["contacts","Контакты"]].map(([id,label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="nav-link px-3 py-1.5 text-sm font-golos text-foreground/70 hover:text-green-main transition-colors rounded-xl hover:bg-green-pale/50"
              >
                {label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("contact-form")}
            className="hidden md:flex items-center gap-2 bg-green-main text-primary-foreground px-5 py-2.5 rounded-2xl text-sm font-medium hover:bg-green-deep transition-colors shadow-sm"
          >
            Оставить заявку
          </button>

          <button
            className="md:hidden bg-white/80 backdrop-blur-md p-2.5 rounded-xl border border-beige-mid"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} className="text-green-main" />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-3 max-w-6xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-beige-mid shadow-lg p-4 animate-fade-in">
            {[["hero","Главная"],["services","Услуги"],["plants","Каталог"],["team","Команда"],["contacts","Контакты"]].map(([id,label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="block w-full text-left px-4 py-3 text-green-main font-medium hover:bg-green-pale/50 rounded-xl transition-colors"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact-form")}
              className="w-full mt-2 bg-green-main text-primary-foreground px-4 py-3 rounded-xl font-medium hover:bg-green-deep transition-colors"
            >
              Оставить заявку
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-green-pale/60 blur-3xl -translate-y-1/4 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-beige-warm/80 blur-3xl translate-y-1/4 -translate-x-1/4" />
        </div>

        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-fade-in-up" style={{animationFillMode:'forwards'}}>
            <div className="inline-flex items-center gap-2 bg-green-pale px-4 py-2 rounded-full mb-6 border border-green-light/50">
              <span className="w-2 h-2 bg-green-mid rounded-full animate-pulse" />
              <span className="text-sm font-golos text-green-mid font-medium">Студия озеленения в Москве</span>
            </div>
            <h1 className="font-cormorant text-6xl md:text-7xl font-light text-green-deep leading-none mb-6">
              Живая<br/>
              <span className="italic font-normal text-green-mid">природа</span><br/>
              в вашем<br/>
              интерьере
            </h1>
            <p className="text-foreground/65 text-lg leading-relaxed mb-10 max-w-md font-golos">
              Подбираем растения, оформляем пространства и заботимся о зелёных зонах — чтобы ваш дом или офис дышали жизнью.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contact-form")}
                className="flex items-center gap-2 bg-green-main text-primary-foreground px-7 py-3.5 rounded-2xl font-medium hover:bg-green-deep transition-all hover:shadow-lg hover:shadow-green-main/20 hover:-translate-y-0.5"
              >
                <Icon name="Leaf" size={18} />
                Оставить заявку
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-2 bg-white text-green-main px-7 py-3.5 rounded-2xl font-medium border border-beige-mid hover:border-green-light hover:bg-green-pale/30 transition-all"
              >
                Посмотреть услуги
                <Icon name="ArrowRight" size={18} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-beige-mid">
              {[["200+","проектов"],["8","лет опыта"],["500+","довольных клиентов"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-cormorant text-3xl font-semibold text-green-main">{num}</div>
                  <div className="text-sm text-foreground/55 font-golos">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in delay-300" style={{animationFillMode:'forwards'}}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-green-deep/15 animate-float">
              <img
                src={HERO_IMAGE}
                alt="Интерьер с растениями"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-deep/20 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl p-4 shadow-xl border border-beige-mid">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-pale rounded-xl flex items-center justify-center text-xl">🌱</div>
                <div>
                  <div className="text-sm font-medium text-foreground">Бесплатная консультация</div>
                  <div className="text-xs text-foreground/55">Выезд специалиста на объект</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-green-main text-primary-foreground rounded-2xl px-4 py-2 shadow-lg">
              <div className="font-cormorant text-2xl font-semibold">5.0 ⭐</div>
              <div className="text-xs opacity-80">рейтинг клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-golos text-green-mid font-medium tracking-widest uppercase">Что мы делаем</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-green-deep mt-3">Наши услуги</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="bg-white rounded-3xl p-8 border border-beige-mid card-hover animate-fade-in-up"
                style={{animationDelay:`${(i+1)*100}ms`, animationFillMode:'forwards'}}
              >
                <div className="w-14 h-14 bg-green-pale rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={s.icon} size={26} className="text-green-main" fallback="Leaf" />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-green-deep mb-3">{s.title}</h3>
                <p className="text-foreground/65 leading-relaxed mb-6 font-golos text-sm">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(tag => (
                    <span key={tag} className="text-xs font-golos bg-beige-warm text-green-mid px-3 py-1.5 rounded-full border border-beige-mid">{tag}</span>
                  ))}
                </div>
                <button
                  onClick={() => scrollTo("contact-form")}
                  className="mt-6 w-full text-green-main border border-green-light hover:bg-green-pale text-sm py-2.5 rounded-xl transition-colors font-medium flex items-center justify-center gap-2"
                >
                  Заказать <Icon name="ArrowRight" size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANTS CATALOG */}
      <section id="plants" className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-pale/40 blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-sm font-golos text-green-mid font-medium tracking-widest uppercase">Наш выбор</span>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light text-green-deep mt-3">Каталог растений</h2>
              <p className="text-foreground/60 mt-3 font-golos max-w-lg">Каждое растение — с описанием, рекомендациями по уходу и подсказками по размещению</p>
            </div>
            <img src={PLANTS_IMAGE} alt="Растения" className="w-48 h-32 object-cover rounded-2xl shadow-md opacity-80 hidden md:block" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plants.map((plant, i) => (
              <div
                key={plant.name}
                className={`rounded-3xl border border-beige-mid overflow-hidden card-hover cursor-pointer transition-all animate-fade-in-up ${activePlant === i ? 'ring-2 ring-green-main ring-offset-2' : ''}`}
                style={{animationDelay:`${i*80}ms`, animationFillMode:'forwards'}}
                onClick={() => setActivePlant(activePlant === i ? null : i)}
              >
                <div className="bg-gradient-to-br from-beige-warm to-green-pale/50 p-6 relative">
                  <div className="text-5xl mb-3">{plant.emoji}</div>
                  <span className={`text-xs font-golos font-semibold px-3 py-1 rounded-full ${plant.tagColor}`}>{plant.tag}</span>
                  <div className="mt-3">
                    <h3 className="font-cormorant text-xl font-semibold text-green-deep">{plant.name}</h3>
                    <p className="text-xs text-foreground/45 italic font-golos mt-0.5">{plant.latin}</p>
                  </div>
                </div>

                <div className="bg-white p-5">
                  <p className="text-sm text-foreground/65 leading-relaxed font-golos mb-4">{plant.desc}</p>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-beige-warm/60 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon name="Sun" size={13} className="text-beige-dark" />
                        <span className="text-xs text-foreground/50 font-golos">Свет</span>
                      </div>
                      <span className="text-xs font-medium text-foreground/80 font-golos">{plant.light}</span>
                    </div>
                    <div className="bg-beige-warm/60 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon name="Droplets" size={13} className="text-green-mid" />
                        <span className="text-xs text-foreground/50 font-golos">Полив</span>
                      </div>
                      <span className="text-xs font-medium text-foreground/80 font-golos">{plant.water}</span>
                    </div>
                    <div className="bg-beige-warm/60 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon name="Wind" size={13} className="text-green-mid" />
                        <span className="text-xs text-foreground/50 font-golos">Влажность</span>
                      </div>
                      <span className="text-xs font-medium text-foreground/80 font-golos">{plant.humidity}</span>
                    </div>
                    <div className="bg-beige-warm/60 rounded-xl p-3">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon name="BarChart2" size={13} className="text-green-mid" />
                        <span className="text-xs text-foreground/50 font-golos">Сложность</span>
                      </div>
                      <span className={`text-xs font-semibold font-golos ${difficultyColor[plant.difficulty] ?? ''}`}>{plant.difficulty}</span>
                    </div>
                  </div>

                  {activePlant === i && (
                    <button
                      onClick={(e) => { e.stopPropagation(); scrollTo("contact-form"); }}
                      className="mt-4 w-full bg-green-main text-primary-foreground py-2.5 rounded-xl text-sm font-medium hover:bg-green-deep transition-colors animate-scale-in"
                    >
                      Хочу это растение
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => scrollTo("contact-form")}
              className="inline-flex items-center gap-2 text-green-main border border-green-light hover:bg-green-pale px-7 py-3.5 rounded-2xl font-medium transition-all text-sm"
            >
              <Icon name="Leaf" size={17} />
              Подобрать растения для вашего пространства
            </button>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="py-24 px-6 bg-beige-warm/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-golos text-green-mid font-medium tracking-widest uppercase">Люди</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-green-deep mt-3">Наша команда</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="rounded-3xl overflow-hidden border border-beige-mid card-hover animate-fade-in-up"
                style={{animationDelay:`${(i+1)*100}ms`, animationFillMode:'forwards'}}
              >
                <div className={`${member.color} px-8 pt-10 pb-8`}>
                  <div className="w-20 h-20 rounded-3xl bg-white/70 flex items-center justify-center text-4xl mb-5 shadow-sm">{member.emoji}</div>
                  <h3 className="font-cormorant text-2xl font-semibold text-green-deep">{member.name}</h3>
                  <p className="text-sm font-golos text-green-mid font-medium mt-1">{member.role}</p>
                </div>
                <div className="bg-white p-7">
                  <p className="text-sm text-foreground/65 leading-relaxed font-golos">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact-form" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-golos text-green-mid font-medium tracking-widest uppercase">Напишите нам</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-green-deep mt-3">Оставить заявку</h2>
            <p className="text-foreground/60 mt-3 font-golos">Ответим в течение 2 часов и назначим бесплатный выезд</p>
          </div>

          {sent ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-beige-mid shadow-sm animate-scale-in">
              <div className="text-6xl mb-5">🌿</div>
              <h3 className="font-cormorant text-3xl font-semibold text-green-deep mb-3">Заявка отправлена!</h3>
              <p className="text-foreground/60 font-golos">Наш менеджер свяжется с вами в ближайшее время. Спасибо за обращение!</p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 text-sm text-green-mid hover:text-green-main underline font-golos"
              >
                Отправить ещё одну
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 border border-beige-mid shadow-sm">
              <div className="grid md:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-medium text-foreground/70 font-golos mb-2">Ваше имя *</label>
                  <input
                    required
                    type="text"
                    placeholder="Иван Иванов"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full bg-beige-warm/50 border border-beige-mid rounded-xl px-4 py-3 text-sm font-golos outline-none focus:border-green-light focus:ring-2 focus:ring-green-pale transition-all placeholder:text-foreground/35"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/70 font-golos mb-2">Телефон *</label>
                  <input
                    required
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full bg-beige-warm/50 border border-beige-mid rounded-xl px-4 py-3 text-sm font-golos outline-none focus:border-green-light focus:ring-2 focus:ring-green-pale transition-all placeholder:text-foreground/35"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label className="block text-sm font-medium text-foreground/70 font-golos mb-2">Email</label>
                <input
                  type="email"
                  placeholder="ivan@example.com"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="w-full bg-beige-warm/50 border border-beige-mid rounded-xl px-4 py-3 text-sm font-golos outline-none focus:border-green-light focus:ring-2 focus:ring-green-pale transition-all placeholder:text-foreground/35"
                />
              </div>
              <div className="mb-7">
                <label className="block text-sm font-medium text-foreground/70 font-golos mb-2">Сообщение</label>
                <textarea
                  rows={4}
                  placeholder="Расскажите о вашем проекте: тип помещения, пожелания, примерный бюджет..."
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full bg-beige-warm/50 border border-beige-mid rounded-xl px-4 py-3 text-sm font-golos outline-none focus:border-green-light focus:ring-2 focus:ring-green-pale transition-all resize-none placeholder:text-foreground/35"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-main text-primary-foreground py-4 rounded-2xl font-medium text-base hover:bg-green-deep transition-all hover:shadow-lg hover:shadow-green-main/20 flex items-center justify-center gap-2"
              >
                <Icon name="Send" size={18} />
                Отправить заявку
              </button>
              <p className="text-xs text-center text-foreground/40 font-golos mt-4">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-green-deep text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-green-mid/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-green-light/10 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <span className="text-sm font-golos text-green-light font-medium tracking-widest uppercase">Где нас найти</span>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light text-primary-foreground mt-3">Контакты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67", sub: "Ежедневно 9:00–20:00" },
              { icon: "Mail", label: "Email", value: "hello@zelenydом.ru", sub: "Ответим в течение 2 часов" },
              { icon: "MapPin", label: "Адрес", value: "Москва, ул. Садовая, 15", sub: "м. Цветной бульвар" },
            ].map(c => (
              <div key={c.label} className="bg-white/10 backdrop-blur-sm rounded-3xl p-7 border border-white/15 hover:bg-white/15 transition-colors">
                <div className="w-12 h-12 bg-green-light/20 rounded-2xl flex items-center justify-center mb-5">
                  <Icon name={c.icon} size={22} className="text-green-light" fallback="Info" />
                </div>
                <p className="text-xs font-golos text-green-light/70 uppercase tracking-widest mb-1">{c.label}</p>
                <p className="font-cormorant text-xl font-medium text-primary-foreground mb-1">{c.value}</p>
                <p className="text-xs font-golos text-primary-foreground/50">{c.sub}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl overflow-hidden bg-green-mid/30 border border-white/15 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-3">📍</div>
              <p className="font-cormorant text-2xl text-primary-foreground/80">Москва, ул. Садовая, 15</p>
              <p className="text-sm font-golos text-primary-foreground/50 mt-1">м. Цветной бульвар, 5 минут пешком</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-deep border-t border-white/10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="https://cdn.poehali.dev/projects/04112904-6381-486e-bf36-548e9443f9a8/bucket/02e8cc00-ab59-431a-926e-b95d53031924.png" alt="Зелёный Дом" className="h-10 w-10 object-contain" />
            <span className="font-cormorant text-lg font-semibold text-primary-foreground/80">Зелёный Дом</span>
          </div>
          <p className="text-xs font-golos text-primary-foreground/40 text-center">
            © 2024 Студия озеленения «Зелёный Дом» · Москва
          </p>
          <div className="flex gap-4">
            {[["services","Услуги"],["plants","Каталог"],["contacts","Контакты"]].map(([id, item]) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-xs font-golos text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}