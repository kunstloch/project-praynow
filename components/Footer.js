import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

/* Sticky Footer */

const Content = styled.div`
  flex-grow: 1;
`;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export default function Footer() {
  return (
    <Container>
      <Content>
        <p>TEST - TEST</p>
      </Content>
    </Container>
  );
}
