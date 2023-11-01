import CategoryComp from "../components/Categories";
import AddTransactionForm from "../components/AddTransactionForm";

export default function TransactionsPg() {
    return(
        <>
        <h1>Your Transactions</h1>
        <AddTransactionForm />
        <CategoryComp />
        </>
    )
}