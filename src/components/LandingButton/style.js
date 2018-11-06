import styled from 'styled-components'
import theme from 'vars/theme'

const Toggle = styled.form`
  position: relative;
  border: solid 6px ${theme.orangePrimary};
  border-radius: 999px;
  transition: transform cubic-bezier(0, 0, 0.3, 2) 0.4s;
  transform-style: preserve-3d;
  perspective: 800px;

  & > input[type='radio'] {
    display: none;
  }

  & > #choice1:checked ~ #flap {
    transform: rotateY(-180deg);
  }

  & > #choice1:checked ~ #flap > .content {
    transform: rotateY(-180deg);
  }

  & > #choice2:checked ~ #flap {
    transform: rotateY(0deg);
  }

  & > label {
    display: inline-block;
    min-width: 180px;
    padding: 30px;
    font-size: 30px;
    text-align: center;
    color: ${theme.orangePrimary};
    cursor: pointer;
  }

  & > label,
  & > #flap {
    font-weight: bold;
    text-transform: capitalize;
  }

  & > #flap {
    position: absolute;
    top: calc(0px - 6px);
    left: 50%;
    height: calc(100% + 6px * 2);
    width: 50.25%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    background-color: ${theme.orangePrimary};
    border-top-right-radius: 999px;
    border-bottom-right-radius: 999px;
    transform-style: preserver-3d;
    transform-origin: left;
    transition: transform cubic-bezier(0.4, 0, 0.2, 1) .5s;
  }

  & > #flap > .content {
    color: #fff;
    transition: transform 0s linear .25s;
    transform-style: preserve-3d;
  }
`

export { Toggle }
