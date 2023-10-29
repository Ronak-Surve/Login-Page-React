import styled from 'styled-components';

export const Form = styled.form`
  display: block;
  position: relative;
  margin: 10px; /* Thin margin */
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: 1;
    background-image: linear-gradient(to bottom right, #FFCE00, #FE4880);
  }

  @media (min-width: 768px) {
    margin: 20px; /* Slightly larger margin for larger screens */
    padding: 20px; /* Reduce padding for larger screens */
  }
`;

export const InnerForm = styled.div`
  position: relative;
  display: block;
  background-color: #FFF;
  padding: 10px; /* Reduce padding for larger screens */
  z-index: 2;

  @media (min-width: 768px) {
    padding: 20px; /* Increase padding for larger screens */
  }
`;

export const LoginText = styled.h2`
  color: #888;
  font-size: 18px; /* Reduce font size */
  font-weight: 500;
  margin-bottom: 10px; /* Thin margin */

  @media (min-width: 768px) {
    font-size: 24px; /* Default font size for larger screens */
    margin-bottom: 15px; /* Default margin for larger screens */
  }
`;

export const FormElement = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 8px; /* Thin margin */

  @media (min-width: 768px) {
    margin-bottom: 10px; /* Default margin for larger screens */
  }
`;

export const FormLabel = styled.label`
  display: block;
  color: #666;
  font-size: 12px;
  margin-bottom: 4px; /* Thin margin */
  transition: 0.4s;

  &:focus-within {
    color: #FE4800;
  }
`;

export const FormInput = styled.input`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  display: block;
  width: calc(100% - 20px); /* Adjust width and padding for larger screens */
  padding: 6px;
  background-color: #F8F8F8;
  border-radius: 4px;
  border: none;

  &:focus {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
  }
`;

export const Button = styled.button`
  appearance: none;
  background: none;
  border: none;
  outline: none;
  display: inline-block;
  padding: 6px 12px; /* Adjust padding for larger screens */
  border-radius: 4px;
  background-image: linear-gradient(to right, #FFCE00 50%, #FFCE00 50%, #FE4880);
  background-size: 200%;
  background-position: 0%;
  transition: 0.4s;
  color: #FFF;
  font-weight: 700;
  cursor: pointer;
  border: none;

  &:hover {
    background-position: 100% 0%;
  }

  @media (min-width: 768px) {
    padding: 10px 20px; /* Adjust padding for larger screens */
  }
`;
