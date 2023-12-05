import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState: {
    tableData: [],
    lineChartData: [],
    pieChartData: [],
  },
  reducers: {
    getTableData: (state, action) => {
      state.tableData = action.payload;
    },
    getLineChartData: (state, action) => {
      state.lineChartData = action.payload;
    },
    getPieChartData: (state, action) => {
      state.pieChartData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTableData, getLineChartData, getPieChartData } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
