import PropTypes from 'prop-types'
import * as React from 'react';
import { withTranslation } from '../../i18n'

const Error = ({ statusCode }) => {
  return <div>{statusCode}</div>;
};

Error.getInitialProps = async ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    namespacesRequired: ['common'],
    statusCode,
  }
};

Error.defaultProps = {
  statusCode: null,
}

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Error)
