export default function ArticleSorter({ setSortBy, setOrder, sortBy, order }) {
    const handleSorting = (event) => {
      setSortBy(event.target.value)
    }
  
    const handleOrdering = (event) => {
      setOrder(event.target.value)
    }
  
    return (
      <div className="article-sorting-ordering">
        <h3>Sort Articles By...</h3>
        <select value={sortBy} onChange={handleSorting}>
          <option value="created_at">Date</option>
          <option value="comment_count">Interactions</option>
          <option value="votes">Votes</option>
        </select>
  
        <h3>Order Articles By...</h3>
        <select value={order} onChange={handleOrdering}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>
    )
  }