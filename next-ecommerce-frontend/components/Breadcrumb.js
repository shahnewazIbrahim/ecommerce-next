export default function Breadcrumb({ items }) {
    return (
      <nav className="bg-gray-100 p-4">
        <ol className="flex space-x-2">
          {items.map((item, index) => (
            <li key={index} className="text-gray-600">
              {index > 0 && <span>/</span>}
              <a href="#" className="hover:underline">{item}</a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }
  