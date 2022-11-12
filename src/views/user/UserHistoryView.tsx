import { makeStyles } from '@mui/styles';
import { ReactElement, useEffect, useState } from 'react';

import dummyData from '../../../dummyData.json';

const useStyles = makeStyles(() => ({
  table: {
    borderCollapse: 'collapse',
    textAlign: 'left',
    width: '100%',
    minHeight: '4rem',
    '& tr:nth-child(odd)': {
      backgroundColor: 'rgb(241, 240, 240)',
    },
    '& tr:nth-child(even)': {
      backgroundColor: '#fff',
    },
    '& td, th': {
      padding: '0.6em',
    },
  },
}));

export const UserHistoryView = (): ReactElement => {
  const [rewardHistory, setRewardHistory] = useState<
    { year: number; month: number; co2_saved: number; reward: number }[]
  >([]);

  const classes = useStyles();
  useEffect(() => {
    async function fetchData() {
      setRewardHistory(dummyData.HISTORY_DATA);
    }

    fetchData();
  }, []);
  return (
    <table className={classes.table}>
      <TableHeader />
      <tbody>
        {rewardHistory.map((eachHistory, index) => (
          <TableItem key={`${index} ${eachHistory.reward}`} history={eachHistory} />
        ))}
      </tbody>
    </table>
  );
};

const TableItem = ({ history: { year, month, co2_saved, reward } }): ReactElement => {
  return (
    <tr>
      <td>{year}</td>
      <td>{month}</td>
      <td>{co2_saved}</td>
      <td>{reward}</td>
    </tr>
  );
};

const TableHeader = (): ReactElement => {
  return (
    <thead>
      <tr>
        <th>year</th>
        <th>month</th>
        <th>co2 saved</th>
        <th>reward</th>
      </tr>
    </thead>
  );
};
