import { Icon } from './Icon'
export function BottomNav({ active }: { active: number }) {
  const items = [['home','Accueil'],['grid','Catégories'],['plus','Publier'],['message','Messages'],['user','Profil']] as const
  return <nav className="bottom-nav">{items.map((it,i)=><a className={active%5===i?'active':''} key={it[1]}><Icon name={it[0]}/><span>{it[1]}</span></a>)}</nav>
}
