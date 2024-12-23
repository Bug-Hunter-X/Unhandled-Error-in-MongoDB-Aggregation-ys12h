```javascript
// Assuming you have a MongoDB connection established

db.collection('myCollection').aggregate([
  { $match: { field: 'value' } },
  { $group: { _id: '$someField', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]).toArray((err, result) => {
  if (err) {
    console.error('Aggregation error:', err);
  } else {
    console.log('Most frequent value:', result[0]._id);
  }
});
```