import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';
import swaggerDocument from '../swagger.json';

const SwaggerComponent = () => <SwaggerUI spec={swaggerDocument} />;

export default SwaggerComponent;