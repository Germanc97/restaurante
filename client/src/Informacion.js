import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import './App.css';
import './semantic/semantic.min.css'
import { Segment,Select } from 'semantic-ui-react'
const currencies = [
  {
    value: 'V',
    text: 'Vegana',
  },
  {
    value: 'M',
    text: 'Mediterranea',
  },
  {
    value: 'I',
    text: 'Italiana',
  },
  {
    value: 'O',
    text: 'Otros',
  },
];
const semana = [
  {
    value: 'L',
    text: 'Lunes',
  },
  {
    value: 'M',
    text: 'Martes',
  },
  {
    value: 'M',
    text: 'Miercoles',
  },
  {
    value: 'J',
    text: 'Jueves',
  },
  {
    value: 'V',
    text: 'Viernes',
  },
  {
    value: 'S',
    text: 'Sabado',
  },
  {
    value: 'D',
    text: 'Domingo',
  },
];

const useStyles = makeStyles(theme => ({
  Aceptar: {
    width: 92,
    marginLeft: 112,
  },
  horario: {
    width: 125,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  containerDays: {
    width: 350,
    marginLeft: 100,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width:300,
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 300,
  },
}));

export default function InformacionForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    currency: 'Italiana',
    currencyI: 'Inicio',
    currencyF: 'Fin',
    timeI: 'Inicio',
    timeF: 'Fin',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Segment className="Canvas">
    <div class="container">
              <div class="row">
                  <div class="col-6 ">
                  <form class="ui form">
                  <div className={classes.containerDays}>
                          <div class="field">
                          <label>
                          Nombre:
                          </label>
                          <br/>
                          <div className="ui left input">
                          <input type="text" placeholder="Nombre restaurante"></input>
                          </div>
                          </div>
                          <br/>
                          <div class="field">
                          <label>
                          Dirección:
                          </label>
                          <br/>
                          <div className="ui left input">
                          <input type="text" placeholder="Ingresa la dirección"></input>
                          </div>
                          </div>
                          <br/>
                          <div class="field">
                          <label>
                          Telefono:
                          </label>
                          <br/>
                          <div className="ui left input">
                          <input type="text" placeholder="Ingresa el teléfono"></input>
                          </div>
                          </div>
                          </div>
                        </form>
                  </div>
                  <div class="col-6">
                  <form class="ui form">
                  <div className={classes.containerDays}>
                        <div class="field">
                        <label>
                        Tipo de comida:
                        </label>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Campo Requerido*"
                          className={classes.textField}
                          value={values.currency}
                          onChange={handleChange('currency')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          helperText="Selecciona el tipo de comida"
                          margin="normal"
                          variant="outlined"
                        >
                          {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        </div>
                        <div class="field">
                        <label>
                        Dias abierto:
                        </label>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Campo Requerido*"
                          className={classes.horario}
                          value={values.currencyI}
                          onChange={handleChange('currencyI')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          helperText="Inicio"
                          margin="normal"
                          variant="outlined"
                        >
                          {semana.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Campo Requerido*"
                          className={classes.horario}
                          value={values.currencyF}
                          onChange={handleChange('currencyF')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          helperText="Fin"
                          margin="normal"
                          variant="outlined"
                        >
                          {semana.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        </div>
                        <div class="field">
                        <label>
                        Horario:
                        </label>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Campo Requerido*"
                          className={classes.horario}
                          value={values.timeI}
                          onChange={handleChange('currencyI')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          helperText="Apertura"
                          margin="normal"
                          variant="outlined"
                        >
                          {semana.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <TextField
                          id="outlined-select-currency"
                          select
                          label="Campo Requerido*"
                          className={classes.horario}
                          value={values.timeF}
                          onChange={handleChange('currencyF')}
                          SelectProps={{
                            MenuProps: {
                              className: classes.menu,
                            },
                          }}
                          helperText="Cierre"
                          margin="normal"
                          variant="outlined"
                        >
                          {semana.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                        <Select placeholder='Tipo de comida' options={currencies} />
                        </div>
                        <div className={classes.Aceptar}><button className="ui inverted secondary button">Aceptar</button></div>
                      </div>
                      </form>
                  </div>
                 </div>
            </div>
            </Segment>
);
}
