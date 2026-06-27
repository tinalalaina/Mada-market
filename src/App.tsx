import './App.css'
import { categories, listings, sponsors } from './data/market'
import { Icon } from './components/Icon'
import { ListingCard } from './components/ListingCard'
import { CategoryRow } from './components/CategoryRow'

function Header() {
  return <header className="topbar">
    <div className="brand"><Icon name="menu" /><strong><span>MADA</span> MARKET</strong></div>
    <label className="search"><Icon name="search" /><input placeholder="Rechercher un produit, une catégorie..." /></label>
    <div className="top-actions"><span><Icon name="message" /> Messages</span><span><Icon name="bell" /> Notifications</span><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Andry"/><b>Andry Rakotovao</b><Icon name="chevron" /></div>
  </header>
}

function Hero() {
  return <section className="hero panel">
    <div><h2>Trouvez tout<br/>ce dont vous<br/>avez besoin</h2><button>Découvrir</button></div>
  </section>
}

function Sidebar() {
  return <aside className="sidebar">
    <Hero />
    <section className="panel side-section"><div className="section-head"><h3>Catégories</h3><a>Voir tout</a></div>{categories.map(c => <CategoryRow key={c.name} category={c} />)}</section>
    <section className="panel mini-list"><div className="section-head"><h3>Annonces récentes</h3><a>Voir tout</a></div>{listings.slice(0,3).map(item => <div className="mini" key={item.title}><img src={item.image}/><div><b>{item.title}</b><strong>{item.price}</strong></div></div>)}</section>
  </aside>
}

function SponsoredRail() {
  return <aside className="sponsor-rail panel">
    <div className="sponsor-header"><span>Partenaires officiels</span><strong>Espace sponsorisé</strong></div>
    <h2>Entreprises sponsorisées</h2>
    <p className="muted">Cet emplacement est réservé aux entreprises partenaires de Mada Market, pas aux détails d’une annonce.</p>
    {sponsors.map(company => <article className="sponsor-card" key={company.name}>
      <img src={company.image} alt={company.name}/>
      <div><small>{company.category}</small><h3>{company.name}</h3><p>{company.description}</p><b>{company.phone}</b><span><Icon name="pin"/> {company.location}</span></div>
    </article>)}
    <button className="primary full">Devenir sponsor</button>
  </aside>
}

function Navigation() {
  return <nav className="desktop-nav"><a className="active"><Icon name="home"/>Accueil</a><a><Icon name="grid"/>Catégories</a><a><Icon name="plus"/>Publier une annonce</a><a><Icon name="ticket"/>Mes annonces</a><a><Icon name="heart"/>Mes favoris</a><a><Icon name="user"/>Profil</a></nav>
}

function ListingsContent() {
  return <section className="content"><div className="section-head"><h2>Annonces récentes</h2><a>Voir tout</a></div><div className="carousel">{listings.slice(0,5).map(i=><ListingCard key={i.title} item={i}/>)}</div><div className="section-head border"><h2>Toutes les annonces</h2><div className="view-icons"><Icon name="grid"/><Icon name="list"/></div></div><div className="filters"><button className="primary">Toutes</button><button>Antananarivo</button><button>Prix⌄</button><button>Trier⌄</button></div><div className="grid-listings">{listings.map(i=><ListingCard key={i.title} item={i}/>)}</div></section>
}

function HomePage() {
  return <><Header/><Navigation/><main className="desktop-shell"><Sidebar/><ListingsContent/><SponsoredRail/></main></>
}

function MobileApp() {
  return <main className="mobile-app">
    <header className="mobile-header"><div className="brand"><Icon name="menu"/><strong><span>MADA</span> MARKET</strong></div><Icon name="bell"/></header>
    <label className="search"><Icon name="search"/><input placeholder="Rechercher un produit..."/></label>
    <nav className="mobile-tabs"><a className="active"><Icon name="home"/>Accueil</a><a><Icon name="grid"/>Catégories</a><a><Icon name="plus"/>Publier</a><a><Icon name="heart"/>Favoris</a></nav>
    <Hero />
    <section className="mobile-section"><div className="section-head"><h2>Catégories</h2><a>Voir tout</a></div><div className="mobile-categories">{categories.slice(0,8).map(c => <div className="mobile-category" key={c.name}><span style={{background:c.color}}>{c.icon}</span><b>{c.name.split(' ')[0]}</b></div>)}</div></section>
    <section className="mobile-section"><div className="section-head"><h2>Annonces récentes</h2><a>Voir tout</a></div><div className="mobile-row">{listings.slice(0,5).map(i=><ListingCard key={i.title} item={i}/>)}</div></section>
    <section className="mobile-section"><div className="section-head"><h2>Toutes les annonces</h2><div className="view-icons"><Icon name="grid"/><Icon name="list"/></div></div><div className="filters"><button className="primary">Toutes</button><button>Antananarivo</button><button>Prix⌄</button></div><div className="mobile-listings">{listings.map(i=><ListingCard key={i.title} item={i}/>)}</div></section>
    <section className="mobile-section"><SponsoredRail/></section>
  </main>
}

export default function App(){return <><div className="desktop-app"><HomePage/></div><MobileApp/></>}
