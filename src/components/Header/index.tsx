import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface IHeaderProps {
  onOpenNewTrasactionModal: () => void;
}

export function Header({ onOpenNewTrasactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTrasactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
