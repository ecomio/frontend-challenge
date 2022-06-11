import { ReactElement, useEffect, useState } from 'react';
import { Table, TableBody, TableRow, TableContainer, TableCell, TableHead } from '@mui/material';

import dummyData from '../../../dummyData.json';
import { getMonthName } from './UserDashboardView';

export const UserHistoryView = (): ReactElement => {
  const [userHistory, setUserHistory] = useState<RewardHistory[]>([]);

  useEffect(() => {
    const historyData = dummyData.HISTORY_DATA;
    setUserHistory(historyData);
  }, []);

  return (
    <div>
      <TableContainer>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Year</TableCell>
              <TableCell>Month</TableCell>
              <TableCell>CO2 Saved</TableCell>
              <TableCell>Reward</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userHistory.map((line) => (
              <TableRow key={`Year:${line.year}:month${line.month}`}>
                <TableCell>{line.year}</TableCell>
                <TableCell>{`${getMonthName(line.month)}`}</TableCell>
                <TableCell>{line.co2_saved}</TableCell>
                <TableCell>{line.reward}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
