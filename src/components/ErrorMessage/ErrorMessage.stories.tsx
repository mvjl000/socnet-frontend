import { Story } from '@storybook/react';
import styled from 'styled-components';
import ErrorMessage, { ErrorMessageProps } from './ErrorMessage';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden !important;
`;

export default {
  title: 'Components/ErrorMessage/ErrorMessage',
  component: ErrorMessage,
};

const Template: Story<ErrorMessageProps> = (args) => (
  <Wrapper>
    <ErrorMessage {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {
  message: 'Wrong email or password. Please use valid credentials.',
};
