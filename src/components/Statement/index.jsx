import { useSelector } from "react-redux";
import { selectTransactions } from "src/features/transactions/transactionsSlice";
import { Transaction } from "../Transaction";
import { Container, Heading, TransactionsList } from "./styles";

export const Statement = () => {
  const transactions = useSelector(selectTransactions);

  return (
    <Container>
      <Heading>Extrato</Heading>
      <TransactionsList>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </TransactionsList>
    </Container>
  );
};
