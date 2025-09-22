import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";

export default function BudgetForm() {
  const [budget, setBudget] = useState(0);

  const { dispatch } = useBudget();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Definir presupuesto");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(e.target.valueAsNumber);
    dispatch({ type: "add-budget", payload: { budget } });
  };

  const isValid = useMemo(() => {
    return isNaN(budget) || budget <= 0;
  }, [budget]);
  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-5">
          <label
            htmlFor="budget"
            className="text-4xl text-blue-600 font-bold text-center"
          >
            Definir Presupuesto
          </label>
        </div>
        <input
          type="number"
          id="budget"
          className="w-full bg-white border border-gray-200 p-2"
          placeholder="Define tu presupuesto"
          name="budget"
          value={budget}
          onChange={handleChange}
        />

        <input
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40
          disabled:cursor-auto
          "
          value="Definir Presupuesto"
          disabled={isValid}
        />
      </form>
    </>
  );
}
