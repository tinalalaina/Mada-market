import { Icon } from './Icon'
export function ListingCard({ item }: { item: { title: string; price: string; image: string; location: string } }) {
  return <article className="listing-card"><img src={item.image} alt={item.title}/><div><button className="heart"><Icon name="heart"/></button><h3>{item.title}</h3><strong>{item.price}</strong><p><Icon name="pin"/> {item.location}</p></div></article>
}
