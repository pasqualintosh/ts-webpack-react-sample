interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const ShowPeople: React.FC<IProps> = ({ people }): JSX.Element => {
  const renderList = (): JSX.Element[] => {
    return people.map(person => {
      return (
        <div key={JSON.stringify(person)}>
          <div>
            <img src={person.url} />
            <h3>{person.name}</h3>
          </div>
          <div>
            <p>{person.age} years old</p>
            <p>{person.note}</p>
          </div>
        </div>
      );
    });
  };

  return <div>{renderList()}</div>;
};

export default ShowPeople;
