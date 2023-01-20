// Create the following functions/methods per physician:

// - `insert`—records a new operation duration in minutes
// - `get_max`—returns the highest duration of records that have been inserted
// - `get_min`—returns the lowest duration of records that have been inserted
// - `get_average`—returns the average of all durations of records that have been inserted
// - `get_mode`—returns a mode of all durations of records that have been inserted
// (if more than one mode, return any one of them)

// Optimize for space and time.  Consider/discuss/explain if reading (get)
// or writing (insert) methods should be more performant.
// */

const doctors = [
  {
    name: 'Dr 1',
    times: [60, 20, 20, 40, 62, 12],
  },
  {
    name: 'Dr 2',
    times: [63, 25, 46, 68, 18],
  },
];

//insert new time
const insert = (times, newTime) => {
  return times.push(newTime);
};

//get max time
const get_max = (times) => {
  return Math.max(...times);
};

//get min time
const get_min = (times) => {
  return Math.min(...times);
};

//get average time
const get_average = (times) => {
  return Math.round(times.reduce((a, b) => a + b, 0) / times.length);
};

//get mode time
const get_mode = (arr) => {
  const mode = {};
  let max = 0,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  }

  return max;
};

/* loop through all doctors and execute desired functions, log a new array of the time reports. 
notice that 70 has been added and should be the max for both drs*/
const getReport = (doctors) => {
  time_report = [];

  for (let i = 0; i < doctors.length; i++) {
    let name = doctors[i].name;
    let times = doctors[i].times;

    insert(times, 70);
    let max = get_max(times);
    let min = get_min(times);
    let average = get_average(times);
    let mode = get_mode(times);

    time_report.push([
      {
        name: name,
        max_time: max,
        min_time: min,
        average: average,
        mode: mode,
      },
    ]);
  }
  return time_report;
};

//var for running a new time report
const new_report = getReport(doctors);

console.log(new_report);
