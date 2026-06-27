import { Icon } from './Icon'
export function CategoryRow({ category }: { category: { name: string; count: string; icon: string; color: string } }) {
  return <div className="category-row"><span style={{background: category.color}}>{category.icon}</span><div><b>{category.name}</b><small>{category.count}</small></div><Icon name="chevron"/></div>
}
