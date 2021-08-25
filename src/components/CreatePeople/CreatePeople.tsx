import { useState } from 'react';
import { IState as Props } from './../../screens/Home/Home';

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

interface IState {
  person: {
    name: string;
    age: number;
    url: string;
    note?: string;
  };
}

const CreatePeople: React.FC<IProps> = ({ people, setPeople }): JSX.Element => {
  const [person, setPerson] = useState<IState['person']>({
    name: '',
    age: 18,
    url: '',
    note: '',
  });

  const handleChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setPerson({
      ...person,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setPeople([...people, person]);
  };

  return (
    <div>
      <input
        name={'name'}
        value={person.name}
        placeholder={'name'}
        onChange={handleChange}
      />
      <br />
      <input
        name={'age'}
        value={person.age}
        placeholder={'age'}
        onChange={handleChange}
      />
      <br />
      <input
        name={'url'}
        value={person.url}
        placeholder={'url'}
        onChange={handleChange}
      />
      <br />
      <textarea
        name={'note'}
        value={person.note}
        placeholder={'notes'}
        onChange={handleChange}></textarea>
      <br />
      <button onClick={handleClick}>save</button>
    </div>
  );
};

export default CreatePeople;
