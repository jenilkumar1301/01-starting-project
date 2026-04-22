import './TabButton.css';

export default function TabButton({ children, onSelect , isSelected})  {
  console.log('TabButton is rendered');
  return (
    <li>
      <button ClassName = {isSelected ? 'active' : ''} onClick={onSelect}></button>
    </li>
  );
}