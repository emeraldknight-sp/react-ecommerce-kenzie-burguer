import styled from "styled-components";

export const StyledCart = styled.div`
  min-width: 256px;
  max-width: 400px;
  margin: 0 auto;
  padding: 15px;
  
  .car__header {
    background-color: var(--color-primary);
    color: white;
    padding: 22px 18px 13px;
    border-radius: 5px 5px 0 0;
  }

  .car__title {
    font-size: var(--heading-3);
    line-height: var(--line-height-h3);
    font-weight: 700;
    line-height: 24px;
  }

  .car__main {
    background-color: var(--gray-1);
  }

  .car__items {
    display: flex;
    flex-direction: column;
    gap: 21px;
    height: 300px;
    overflow-x: auto;
    padding: 10px;
  }

  .car__items--empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 128px;
  }

  .car__values {
    padding: 20px;
  }

  .car__values__details {
    display: flex;
    justify-content: space-between;
    border-top: 2px solid var(--gray-2);
    padding: 20px 0;
  }

  .car__total,
  .car__value {
    font-size: var(--content-sm);
    line-height: var(--line-height-sm);
    font-weight: 600;
    line-height: 24px;
    color: var(--gray-4);
  }

  .car__value {
    color: var(--gray-3);
  }

  .car__button {
    background-color: var(--gray-2);
    font-size: var(--content-md);
    line-height: var(--line-height-md);
    color: var(--gray-3);
    width: 100%;
    height: 40px;

    border: 2px solid var(--gray-2);
    border-radius: 8px;
    cursor: pointer;
  }

  .car__subtitle {
    font-size: var(--content-sm);
    line-height: var(--line-height-sm);
    font-weight: 400;
    line-height: 24px;
    color: var(--gray-3);
  }

  .button__group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;
