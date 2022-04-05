import styled from 'styled-components';

export const Header = styled.div`
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

export const AppNameComponent = styled.div`export 
  display: flex;
  align-items: center;
`

export const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 12px;
`

export const SearchIcon = styled.img`
  width: 25px;
  height: 25px;
`

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 6px;
  width: 50%;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
  font-weight: bold;
`