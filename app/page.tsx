
export default function Home() {

  return (
    <div className="w-1/2 p-4 mt-8 mx-auto border">
      <h1 role="heading" className="text-xl mb-4">Shopping List</h1>
      <ul>
        <li className="flex justify-between">
          <span><input type="checkbox" className="mr-2" /> Apples x2</span>
          <span>£1</span>
        </li>
        <li className="flex justify-between">
          <span><input type="checkbox" className="mr-2" /> The quick brown fox jumps over the lazy dog sadf asdf asdf asdf  x2</span>
          <span>£1</span>
        </li>
      </ul>
    </div>
  )
}