import React, { useState } from 'react';
import { Typography, FormControlLabel, Pagination, RadioGroup, Radio, FormLabel, FormControl, Paper, Stack, Button, Box } from '@mui/material'
import Container from '../components/common/Container'
import { useSelector } from 'react-redux'
import './home.css'

const QuizesPage = () =>
{
  const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'stringify()',
      },
      {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'var and let',
      },
      {
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
        type: 'MCQs',
        correctAnswer: 'All of the above',
      },
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'MCQs',
        correctAnswer: 'const',
      },
    ],
  }
  // console.log(quiz.questions.choices)
  const [value, setValue] = useState("");
  // const [error, setError] = React.useState(false);
  // const [helperText, setHelperText] = React.useState('Choose wisely');
  // // const [activeQuestion, setActiveQuestion] = useState(0)
  const [page, setPage] = useState(1)
  const { choices, correctAnswer } = quiz.questions[page - 1]
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  // console.log(correctAnswer)

  const handleRadioChange = (event) =>
  {

    setValue(event.target.value);
    console.log(value)
  };

  const handleSubmit = (event) =>
  {
    event.preventDefault();
    // if (correctAnswer === event.target.value)
    // {

    // }
    console.log(event.target.value)

  };

  const selectPageHandler = (event, value) =>
  {
    setPage(value)
    // activeQuestion(value)
  }




  return (
    <>
      <Container>
        <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography className='animate-charcter' variant="h4" fontSize={{ xs: "1.5rem", md: "2rem", lg: "3rem" }}
            fontWeight="500">Welcome to the quiz!</Typography>
        </Paper>
      </Container>
      <Container>


        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', margin: 'auto' }}>
          <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Stack direction={'column'}>
              <form onSubmit={handleSubmit}>
                {quiz.questions.slice(page - 1, page).map((item, indx) => (

                  <FormControl sx={{ m: 3 }} variant="standard">
                    <FormLabel key={indx} id="demo-error-radios">{item.question}</FormLabel>
                    <RadioGroup
                      aria-labelledby="demo-error-radios"
                      name="quiz"
                      value={value}
                      onChange={handleRadioChange}
                    >

                      {choices.map((item, indx) => (

                        <FormControlLabel key={indx} value={item} control={<Radio />} label={item} />
                      ))

                      }
                    </RadioGroup>
                  </FormControl>
                ))
                }
                {quiz.questions.length === page ? (<Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
                  <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                    Submit
                  </Button>


                </Box>) : (
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '5px' }}>
                    <Stack spacing={2}>

                      <Pagination onChange={selectPageHandler} count={quiz.questions.length} color="primary" />

                    </Stack>
                  </Box>
                )}

              </form>
            </Stack>
          </Paper>

        </Box>
      </Container >
    </>
  )
}

export default QuizesPage