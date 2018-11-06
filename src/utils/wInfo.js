import { withInfo } from '@storybook/addon-info'

const styles = {
  infoStory: {
    margin: '42px 0',
  },
  infoBody: {
    borderWidth: 0,
    backgroundColor: '#fff',
    boxShadow: 'none',
    padding: '0 12px',
    fontSize: '14px',
  },
  infoContent: {
    marginBottom: '12px',
  },
  source: {
    h1: {
      fontSize: '22px',
      color: '#F05E23',
    },
  },
  propTableHead: {
    fontSize: '20px',
    color: '#F05E23',
    fontWeight: 'normal',
  },
}

export const wInfo = text =>
  withInfo({
    header: false,
    inline: true,
    source: true,
    maxPropsIntoLine: 1,
    styles,
    text,
  })
