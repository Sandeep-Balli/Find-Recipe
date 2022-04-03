import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
`;

const Header = styled.div`
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
`

const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 12px;
`

const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
`

const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`

function App() {
  return (
    <Container>
      <Header>
        <AppNameComponent><AppIcon src='food-icon.png' />Find Recipe</AppNameComponent>
        <SearchComponent>
          <SearchIcon src="/search.png" />
          <SearchInput placeholder='Search Recipe'/>
        </SearchComponent>
      </Header>
      Sandeep Balli
    </Container>
  );
}

export default App;
