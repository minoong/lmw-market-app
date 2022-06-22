import React from 'react'
import AssessmentIcon from '@mui/icons-material/Assessment'
import ShowChartIcon from '@mui/icons-material/ShowChart'

type MenuInfoProps = {
 path: string
 menuName: string
 icon?: React.ReactNode
}

export const MENU_INFO_LIST: MenuInfoProps[] = [
 { path: 'market', menuName: '원화마켓', icon: <ShowChartIcon /> },
 { path: 'wallet', menuName: '투자내역', icon: <AssessmentIcon /> },
]
