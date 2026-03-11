import { deleteTransaction } from "../services/api";

function TransactionList({ transactions, refresh }) {

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    refresh();
  };

  return (
    <div>

      {transactions.map((t) => (
        <div key={t.id}>

          {t.type} | {t.category} | ${t.amount}

          <button onClick={()=>handleDelete(t.id)}>
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}

export default TransactionList;