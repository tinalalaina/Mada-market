import './App.css'
import { categories, listings, messages, notifications } from './data/market'
import { Icon } from './components/Icon'
import { ListingCard } from './components/ListingCard'
import { CategoryRow } from './components/CategoryRow'
import { BottomNav } from './components/BottomNav'

const featured = listings[0]

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

function DetailPanel() {
  return <aside className="detail panel">
    <div className="detail-image"><img src={featured.image}/><div className="dots">•••••</div><span>1/6</span></div>
    <h2>{featured.title}</h2><h3>{featured.price}</h3>
    <div className="muted row"><span><Icon name="pin"/> Antananarivo, Madagascar</span><span>Il y a 2 heures</span></div>
    <hr/><h4>Description</h4><p>Toyota RAV4 année 2018 en excellent état, faible kilométrage, bien entretenue, toutes options, automatique, essence.</p>
    <h4>Informations</h4>{[['Marque','Toyota'],['Modèle','RAV4'],['Année','2018'],['Kilométrage','45 000 km'],['Carburant','Essence'],['Boite','Automatique']].map(r=><div className="spec" key={r[0]}><span>{r[0]}</span><b>{r[1]}</b></div>)}
    <div className="actions"><button>Appeler</button><button className="primary">Envoyer un message</button></div>
    <div className="seller"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80"/><div><h3>Andry Rakotovao</h3><p>+261 34 12 345 67<br/>Antananarivo, Madagascar</p></div></div>
  </aside>
}

function HomePage() {
  return <><Header/><nav className="desktop-nav"><a className="active"><Icon name="home"/>Accueil</a><a><Icon name="grid"/>Catégories</a><a><Icon name="plus"/>Publier une annonce</a><a><Icon name="ticket"/>Mes annonces</a><a><Icon name="heart"/>Mes favoris</a><a><Icon name="user"/>Profil</a></nav><main className="desktop-shell"><Sidebar/><section className="content"><div className="section-head"><h2>Annonces récentes</h2><a>Voir tout</a></div><div className="carousel">{listings.slice(0,5).map(i=><ListingCard key={i.title} item={i}/>)}</div><div className="section-head border"><h2>Toutes les annonces</h2><div className="view-icons"><Icon name="grid"/><Icon name="list"/></div></div><div className="filters"><button className="primary">Toutes</button><button>Antananarivo</button><button>Prix⌄</button><button>Trier⌄</button></div><div className="grid-listings">{listings.map(i=><ListingCard key={i.title} item={i}/>)}</div></section><DetailPanel/></main></>
}

function MobileShowcase() {
  return <main className="mobile-showcase">{['Accueil','Catégories','Toutes les annonces','Détail de l’annonce','Publier une annonce','Messages','Conversation','Profil utilisateur','Mes annonces','Mes favoris','Notifications','Paramètres'].map((title, idx)=><section className="phone" key={title}><div className="status">9:41 <span>▰ ◔ ▬</span></div><div className="phone-title"><Icon name={idx===0?'menu':'back'}/><b>{title}</b><span>{idx===0?'':idx===3?'♡':''}</span></div>{idx===0&&<MobileHome/>}{idx===1&&<div className="list-only">{categories.map(c=><CategoryRow key={c.name} category={c}/>)}</div>}{idx===2&&<><label className="search"><Icon name="search"/><input placeholder="Rechercher un produit..."/></label><div className="filters"><button className="primary">Toutes</button><button>Antananarivo</button><button>Prix⌄</button></div><div className="mobile-grid">{listings.slice(0,8).map(i=><ListingCard key={i.title} item={i}/>)}</div></>}{idx===3&&<DetailPanel/>}{idx===4&&<Publish/>}{idx===5&&<Messages/>}{idx===6&&<Chat/>}{idx===7&&<Profile/>}{idx===8&&<MyAds/>}{idx===9&&<div className="mobile-grid">{listings.slice(1,7).map(i=><ListingCard key={i.title} item={i}/>)}</div>}{idx===10&&<Notifications/>}{idx===11&&<Settings/>}<BottomNav active={idx}/></section>)}</main>
}

function MobileHome(){return <><label className="search"><Icon name="search"/><input placeholder="Rechercher un produit, une catégorie..."/></label><Hero/><div className="quick">{categories.slice(0,8).map(c=><div key={c.name}><span>{c.icon}</span><small>{c.name.split(' ')[0]}</small></div>)}</div><h3>Annonces récentes</h3><div className="mobile-grid">{listings.slice(0,4).map(i=><ListingCard key={i.title} item={i}/>)}</div></>}
function Publish(){return <form className="form"><div className="photos"><button>📷</button><button>📷</button><button>📷</button></div>{['Titre de l’annonce','Catégorie','Prix','Localisation','Description'].map(x=><label key={x}>{x}<input placeholder={x}/></label>)}<button className="primary">Publier</button></form>}
function Messages(){return <div>{messages.map(m=><div className="message" key={m.name}><img src={m.avatar}/><div><b>{m.name}</b><p>{m.text}</p></div><time>{m.time}</time></div>)}</div>}
function Chat(){return <div className="chat">{['Bonjour, votre voiture est-elle encore disponible ?','Bonjour, oui elle est encore disponible.','Très bien, peut-on se rencontrer pour voir la voiture ?','Bien sûr, quand êtes-vous disponible ?','Je suis libre cet après-midi.'].map((m,i)=><p className={i%2?'me':''} key={m}>{m}</p>)}<input placeholder="Écrire un message..."/></div>}
function Profile(){return <div className="profile"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"/><h2>Andry Rakotovao</h2><p>+261 34 12 345 67<br/>Antananarivo, Madagascar</p><div className="stats"><b>12<span>Annonces</span></b><b>45<span>Favoris</span></b><b>89<span>Avis</span></b></div>{['Mes annonces','Mes favoris','Messages','Paramètres','Déconnexion'].map(x=><button key={x}>{x}<Icon name="chevron"/></button>)}</div>}
function MyAds(){return <><div className="tabs"><b>Toutes</b><span>En ligne</span><span>Vendues</span></div>{listings.slice(0,4).map(i=><div className="mini wide" key={i.title}><img src={i.image}/><div><b>{i.title}</b><strong>{i.price}</strong><small>En ligne</small></div></div>)}<button className="primary full">+ Publier une annonce</button></>}
function Notifications(){return <div>{notifications.map(n=><div className="notif" key={n.title}><span>{n.icon}</span><div><b>{n.title}</b><p>{n.time}</p></div></div>)}</div>}
function Settings(){return <div className="settings">{['Informations personnelles','Sécurité','Notifications','Confidentialité','Langue Français','Mode sombre','À propos','Déconnexion'].map(x=><button key={x}>{x}<Icon name="chevron"/></button>)}</div>}

export default function App(){return <><div className="desktop-app"><HomePage/></div><MobileShowcase/></>}
