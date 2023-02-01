import { useEffect, useState } from 'react';

type Cocktail = {
  idDrink: string;
  strDrink: string;
};

function Cocktails(): JSX.Element {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    // выполнится один раз при загрузке компонента
    fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a'
    )
      .then((response) => response.json())
      .then((result) => setCocktails(result.drinks));
  }, []);

  return (
    <ul>
      {cocktails.map((cocktail) => (
        <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
      ))}
    </ul>
  );
}

export default Cocktails;
