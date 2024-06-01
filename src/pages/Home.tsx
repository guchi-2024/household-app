import { Box } from '@mui/material'
import Calendar from 'components/Calendar'
import MonthlySummary from 'components/MonthlySummary'
import TransactionForm from 'components/TransactionForm'
import TransactionMenu from 'components/TransactionMenu'
import React from 'react'


const Home = () => {
  return (
    <Box sx={{display: "flex" }}>
      {/* 左側コンテンツ */}
      <Box sx={{flexGrow: 1}}>
        <MonthlySummary />
        <Calendar />
      </Box>

      {/* 右側コンテンツ */}
      <Box>
        <TransactionMenu />
        <TransactionForm />

      </Box>
    </Box>
  )
}

export default Home
