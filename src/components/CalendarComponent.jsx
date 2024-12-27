import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

function CalendarComponent() {
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date()); 

  const fetchHolidays = async (year) => {
    setLoading(true); 
    try {
      const response = await axios.get(`https://calserver.onrender.com/data/${year}`);
      console.log('response',response)
      setHolidays(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching holidays:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    const currentYear = selectedDate.getFullYear();
    fetchHolidays(currentYear); 
  }, [selectedDate]); 

  const handleDateChange = (date) => {
    setSelectedDate(date); 
  };
  const isHoliday = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return holidays.find((holiday) => holiday.date === formattedDate);
  };

  return (
    <div className="calendar-container">
      {loading ? (  
        <p>Loading holidays...</p>
      ) : (
        <Calendar
  value={selectedDate}
  onClickMonth={(date) => {
    const year = date.getFullYear();
    setSelectedDate(new Date(date));  
  }}
  tileContent={({ date, view }) => {
    if (view === "month") {
      const holiday = isHoliday(date);
      if (holiday) {
        return <p className="holiday-label">{holiday.name}</p>;
      }
    }
  }}
/>
      )}
    </div>
  );
}
export default CalendarComponent;







// import React, { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import axios from "axios";

// function CalendarComponent() {
//   const [holidays, setHolidays] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchHolidays = async () => {
//       try {
//         const response = await axios.get("http://localhost:7000/data/2024");
//         setHolidays(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching holidays:", error);
//         setLoading(false);
//       }
//     };
//     fetchHolidays();
//   }, []);
//   const isHoliday = (date) => {
//     const formattedDate = date.toISOString().split("T")[0];
//     return holidays.find((holiday) => holiday.date === formattedDate);
//   };
//   return (
//     <div className="calendar-container">
//       {loading ? (
//         <p>Loading holidays...</p>
//       ) : (
//         <Calendar
//           tileContent={({ date, view }) => {
//             if (view === "month") {
//               const holiday = isHoliday(date);
//               if (holiday) {
//                 return <p className="holiday-label">{holiday.name}</p>;
//               }
//             }
//           }}
//         />
//       )}
//     </div>
//   );
// }
// export default CalendarComponent;








// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import axios from 'axios';

// function CalendarComponent() {
//   const [value, onChange] = useState(new Date());
//   const [holidays, setHolidays] = useState([]);
//   useEffect(() => {
//     const fetchHolidays = async () => {
//       try {
//         const response = await axios.get('http://localhost:7000/data');
//         console.log(response.data);
//         setHolidays(response.data);
//       } catch (error) {
//         console.error('Error fetching holidays:', error);
//       }
//     };

//     fetchHolidays();
//   }, []);

//   const isHoliday = (date) => {
//     const formattedDate = date.toISOString().split('T')[0];
//     console.log('Formatted Date:', formattedDate);
//     return holidays.find(holiday => holiday.date === formattedDate);
//   };

//   if (holidays.length === 0) {
//     return <div>Loading holidays...</div>;
//   }

//   return (
//     <div className="calendar-container">
//       <Calendar
//         onChange={onChange}
//         value={value}
//         tileContent={({ date, view }) => {
//           if (view === 'month') {
//             const holiday = isHoliday(date);
//             if (holiday) {
//               console.log(`Holiday on ${date}:`, holiday.name);
//               return <p className="holiday-label">{holiday.name}</p>;
//             }
//           }
//         }}
//       />
//     </div>
//   );
// }

// export default CalendarComponent;




// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import axios from 'axios';

// function CalendarComponent() {
//   const [value, onChange] = useState(new Date());
//   const [holidays, setHolidays] = useState([]);

//   useEffect(() => {
//     const fetchHolidays = async () => {
//       try {
//         const response = await axios.get('http://localhost:7000/data');
//         setHolidays(response.data);
//       } catch (error) {
//         console.error('Error fetching holidays:', error);
//       }
//     };

//     fetchHolidays();
//   }, []);

//   const isHoliday = (date) => {
//     const formattedDate = date.toISOString().split('T')[0];
//     return holidays.find(holiday => holiday.date === formattedDate);
//   };

//   return (
//     <div className="calendar-container">
//       <Calendar
//         onChange={onChange}
//         value={value}
//         tileContent={({ date, view }) => {
//           if (view === 'month') {
//             const holiday = isHoliday(date);
//             if (holiday) {
//               return <p className="holiday-label">{holiday.name}</p>;
//             }
//           }
//         }}
//       />
//     </div>
//   );
// }

// export default CalendarComponent;
