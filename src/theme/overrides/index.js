import { merge } from 'lodash';
import Card from './Card';
import Button from './Button';
import Input from './Input';
import Container from './Container';
import Typography from './Typography';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return merge(
    Card(theme),
    Input(theme),
    Button(theme),
    Container(theme),
    Typography(theme),
  );
}
