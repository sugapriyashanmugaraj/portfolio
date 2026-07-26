import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  FormLabel,
  MenuItem,
  Radio,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const PostJob = () => {
  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
    { title: "Casablanca", year: 1942 },
    { title: "City Lights", year: 1931 },
    { title: "Psycho", year: 1960 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Intouchables", year: 2011 },
    { title: "Modern Times", year: 1936 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Rear Window", year: 1954 },
    { title: "The Pianist", year: 2002 },
    { title: "The Departed", year: 2006 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Back to the Future", year: 1985 },
    { title: "Whiplash", year: 2014 },
    { title: "Gladiator", year: 2000 },
    { title: "Memento", year: 2000 },
    { title: "The Prestige", year: 2006 },
    { title: "The Lion King", year: 1994 },
    { title: "Apocalypse Now", year: 1979 },
    { title: "Alien", year: 1979 },
    { title: "Sunset Boulevard", year: 1950 },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      year: 1964,
    },
    { title: "The Great Dictator", year: 1940 },
    { title: "Cinema Paradiso", year: 1988 },
    { title: "The Lives of Others", year: 2006 },
    { title: "Grave of the Fireflies", year: 1988 },
    { title: "Paths of Glory", year: 1957 },
    { title: "Django Unchained", year: 2012 },
    { title: "The Shining", year: 1980 },
    { title: "WALL·E", year: 2008 },
    { title: "American Beauty", year: 1999 },
    { title: "The Dark Knight Rises", year: 2012 },
    { title: "Princess Mononoke", year: 1997 },
    { title: "Aliens", year: 1986 },
    { title: "Oldboy", year: 2003 },
    { title: "Once Upon a Time in America", year: 1984 },
    { title: "Witness for the Prosecution", year: 1957 },
    { title: "Das Boot", year: 1981 },
    { title: "Citizen Kane", year: 1941 },
    { title: "North by Northwest", year: 1959 },
    { title: "Vertigo", year: 1958 },
    {
      title: "Star Wars: Episode VI - Return of the Jedi",
      year: 1983,
    },
    { title: "Reservoir Dogs", year: 1992 },
    { title: "Braveheart", year: 1995 },
    { title: "M", year: 1931 },
    { title: "Requiem for a Dream", year: 2000 },
    { title: "Amélie", year: 2001 },
    { title: "A Clockwork Orange", year: 1971 },
    { title: "Like Stars on Earth", year: 2007 },
    { title: "Taxi Driver", year: 1976 },
    { title: "Lawrence of Arabia", year: 1962 },
    { title: "Double Indemnity", year: 1944 },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      year: 2004,
    },
    { title: "Amadeus", year: 1984 },
    { title: "To Kill a Mockingbird", year: 1962 },
    { title: "Toy Story 3", year: 2010 },
    { title: "Logan", year: 2017 },
    { title: "Full Metal Jacket", year: 1987 },
    { title: "Dangal", year: 2016 },
    { title: "The Sting", year: 1973 },
    { title: "2001: A Space Odyssey", year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: "Toy Story", year: 1995 },
    { title: "Bicycle Thieves", year: 1948 },
    { title: "The Kid", year: 1921 },
    { title: "Inglourious Basterds", year: 2009 },
    { title: "Snatch", year: 2000 },
    { title: "3 Idiots", year: 2009 },
    { title: "Monty Python and the Holy Grail", year: 1975 },
  ];
  const [selectedSkills, setSelectedSkills] = useState<any>([]);

  const handleSkillChange = (event: any, values: any) => {
    values.length > 3 ? alert("Max 3 skills") : setSelectedSkills(values);
  };

  const empOptions = [
    {
      opt_name: "Any",
    },
    {
      opt_name: "Full time",
    },
    {
      opt_name: "Part time",
    },
    {
      opt_name: "Gig",
    },
  ];
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

  return (
    <div className="postJobOutCont mt30">
      <h3 className="postJobTitle">Post a Job</h3>
      <div className="jobsPostCont mt25">
        <h5 className="jobInfoTitle">Job Information</h5>
        <div className="mt20">
          <div className="postJobFormCont">
            <div className="formSingleField">
              <label className="postFormLabel dfac">
                JOB TITLE <p className="reqAst">&nbsp;&nbsp;*</p>
              </label>
              <TextField
                variant="standard"
                fullWidth
                placeholder="Who do you need ?"
                className="mt15"
                InputProps={{
                  // disableUnderline: true,
                  className: "postJobInp",
                }}
              />
            </div>
            <div className="formSingleField">
              <label className="postFormLabel dfac">
                Employment Type <p className="reqAst">&nbsp;&nbsp;*</p>
              </label>
              <TextField
                select
                variant="standard"
                fullWidth
                placeholder="Who do you need ?"
                className="mt15"
                InputProps={{
                  // disableUnderline: true,
                  className: "postJobInp",
                }}
                SelectProps={{
                  MenuProps: {
                    // disableScrollLock: true,
                  },
                }}
                value={empOptions[0]?.opt_name}
              >
                {empOptions.map((opt, i) => {
                  return (
                    <MenuItem key={i} value={opt?.opt_name}>
                      {opt?.opt_name}
                    </MenuItem>
                  );
                })}
              </TextField>
            </div>
            <div className="formSingleField100 mt15">
              <label className="postFormLabel dfac">
                Employment Type <p className="reqAst">&nbsp;&nbsp;*</p>
              </label>
              <TextField
                multiline
                minRows={4}
                variant="standard"
                fullWidth
                placeholder="Who do you need ?"
                className="mt15 "
                InputProps={{
                  className: "postJobInp postJobInpTa",
                }}
              ></TextField>
            </div>
            <div className="formSingleField mt15">
              <label className="postFormLabel dfac">
                Wage/Salary per month <p className="reqAst">&nbsp;&nbsp;*</p>
              </label>
              <TextField
                variant="standard"
                fullWidth
                placeholder="Indicate currency"
                className="mt15"
                InputProps={{
                  // disableUnderline: true,
                  className: "postJobInp",
                }}
              />
            </div>
            <div className="formSingleField">
              <label className="postFormLabel dfac">
                Working Hours <p className="reqAst">&nbsp;&nbsp;*</p>
              </label>
              <TextField
                type="number"
                variant="standard"
                fullWidth
                placeholder="Desired hours per week"
                className="mt15"
                InputProps={{
                  // disableUnderline: true,
                  className: "postJobInp",
                }}
              />
            </div>
            <div className="formSingleField mt15">
              <label className="postFormLabel dfac">
                Email <p className="reqAst">&nbsp;&nbsp;*</p>
              </label>
              <TextField
                variant="standard"
                fullWidth
                placeholder="Email of contact person"
                className="mt15"
                InputProps={{
                  // disableUnderline: true,
                  className: "postJobInp",
                }}
              />
            </div>
            <div className="formSingleField">
              <label className="postFormLabel dfac">
                Contact Person <p className="reqAst">&nbsp;&nbsp;*</p>
              </label>
              <TextField
                variant="standard"
                fullWidth
                placeholder="Name of the person to contact"
                className="mt15"
                InputProps={{
                  // disableUnderline: true,
                  className: "postJobInp",
                }}
              />
            </div>
          </div>
        </div>
        <div className="jobFormSep mt30 mb30" />
        <h5 className="jobInfoTitle">Skills needed</h5>
        <div className="mt20">
          {/* <label className="postFormLabel dfac">Select upto 3 skills</label> */}
          <Autocomplete
            multiple // Enable multiple selections
            noOptionsText="No skill found"
            className="mt15"
            options={options.sort(
              (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
            )}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.title}
            value={selectedSkills} // Pass the selected values
            onChange={handleSkillChange} // Handle the change in selected values
            renderInput={(params) => (
              <TextField
                placeholder="Search skill"
                variant="standard"
                {...params}
                InputProps={{
                  ...params.InputProps,
                  className: "postJobInp postJobInpSearch",
                  endAdornment: (
                    <div className="postJobIcon">
                      <Search />
                    </div>
                  ),
                }}
              />
            )}
            renderGroup={(params) => (
              <li key={params.key}>
                <div
                  style={{
                    padding: "4px 10px",
                    color: "#1976D2",
                    backgroundColor: "#E3F2FD",
                  }}
                >
                  {params.group}
                </div>
                <ul style={{ padding: 0 }}>{params.children}</ul>
              </li>
            )}
          />
        </div>
        <div className="jobFormSep mt30 mb30" />
        <h5 className="jobInfoTitle">Notification</h5>
        <div className="mt20">
          <Radio size="small" />
          <FormLabel className="postFormLabel">
            SEND A DAILY EMAIL SUMMARY OF MY JOB POST APPLICATIONS SEND ALL
          </FormLabel>
        </div>
        <div>
          <Radio size="small" />
          <FormLabel className="postFormLabel">
            APPLICATIONS IMMEDIATELY TO MY EMAIL ADDRESS SEND NO APPLICATIONS TO
            MY EMAIL ADDRESS
          </FormLabel>
        </div>
        <div>
          <Radio size="small" />
          <FormLabel className="postFormLabel">
            I'LL USE THE ONLINEJOBS.PH MESSAGING
          </FormLabel>
        </div>
        <div className="jobFormSep mt30 mb30 " />
        <div style={{ width: "100%" }}>
          <button className="searchBarInnBtn centerFlex">Post Job</button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
