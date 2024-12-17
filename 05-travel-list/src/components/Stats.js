export default function Stats({ items }) {
  console.log("in the stats", items);
  const numOfItem = items.length;
  const numOfItemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numOfItemPacked / numOfItem) * 100);

  if (!numOfItem)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 📃</em>
      </footer>
    );
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go 🛫"
          : `💼 You have ${numOfItem} item on your list, and you already packed
        ${numOfItemPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
