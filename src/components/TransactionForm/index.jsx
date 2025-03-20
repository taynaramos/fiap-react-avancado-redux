import { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button";
import { Card, Form, Heading, Input, Label, Select } from "./styles";

export const TransactionForm = () => {
  const [transactionType, setTransactionType] = useState("");
  const [transactionValue, setSetTransactionValue] = useState("");

  const createTransacion = (evt) => {
    evt.preventDefault();
    console.log({
      transactionType,
      transactionValue,
    });
  };

  const transactionTypes = useSelector((state) => state.transactionTypes.types);

  return (
    <Card>
      <Heading>Nova transação</Heading>
      <Form onSubmit={createTransacion}>
        <Select
          value={transactionType}
          onChange={(evt) => setTransactionType(evt.target.value)}
          required
        >
          <option value="" disabled hidden>
            Selecione o tipo de transação
          </option>
          {transactionTypes.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>
        <div>
          <Label>Valor</Label>
          <Input
            placeholder="00,00"
            type="number"
            value={transactionValue}
            onChange={(evt) => setSetTransactionValue(evt.target.value)}
            required
          />
        </div>
        <Button>Concluir transação</Button>
      </Form>
    </Card>
  );
};
