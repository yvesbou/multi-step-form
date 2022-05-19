import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';

const blockchains = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'Ethereum (Kovan)'
  },
  {
    value: '2',
    label: 'Avalanche (Fuji)'
  },
  {
    value: '3',
    label: 'Polygon (Mumbai)'
  },
  {
    value: '4',
    label: 'Binance Chain (Testnet)'
  }
];

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'Florida'
  },
  {
    value: '22',
    label: 'Michigan'
  },
  {
    value: '33',
    label: 'Texas'
  }
];

const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: '111',
    label: 'United States'
  },
  {
    value: '222',
    label: 'Italy'
  },
  {
    value: '333',
    label: 'Vietnam'
  }
];

export default function AddressForm(props) {
  const {
    formField: {
      nameOfNFT,
      description,
      blockchain,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Metadata
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <InputField name={nameOfNFT.name} label={nameOfNFT.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={description.name} label={description.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={blockchain.name}
            label={blockchain.label}
            data={blockchains}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
