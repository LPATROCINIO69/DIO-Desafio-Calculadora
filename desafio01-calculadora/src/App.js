import {Container, Content, Row} from './styles';
import Input from './components/Input';
import Button from './components/Button';
import { useState } from 'react';


const App =()=> {
  const [currentNumber, setCurrentNumber] = useState(''); 
  const [firstNumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('');
    setFirstNumber('');
    setOperation('');
  }

  const handleAddNumber = (num) => {   
      if (operation==='') { 
        setCurrentNumber(prev => `${prev}${num}`)
      } else {
        setCurrentNumber(num);
      }
  }

  

  const handleSumNumbers = () =>{
      if (operation !=='' && firstNumber!=='' && currentNumber!==''){
          handleResultNumbers();
          setOperation('+');
          setFirstNumber(currentNumber);
      } else {
        setFirstNumber(currentNumber);
        setCurrentNumber('');
        setOperation('+');
      }
      
  }


    const handleDifNumbers = () =>{
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('-');
  }

  const handleProdNumbers = () =>{
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('x');
  }

  const handleDivNumbers = () =>{
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('/');
  }

  const handleSignal = () =>{
      const number = (-1) *Number(currentNumber);
      setCurrentNumber(String(number));
  }


  const handlePower = () =>{
      setFirstNumber(currentNumber);
      setCurrentNumber('');
      setOperation('^');
  }

  const handleResultNumbers = () =>{
    
    if (currentNumber !== '' && operation !== ''){
        switch (operation) {
          case '+':
            const sum = Number(firstNumber) + Number(currentNumber);
            setCurrentNumber(String(sum));
            //setFirstNumber('');
            break;
          case '-':
            const dif = Number(firstNumber) - Number(currentNumber);
            setCurrentNumber(String(dif));
            setFirstNumber('');
            break;
          case 'x':
            const prod = Number(firstNumber) * Number(currentNumber);
            setCurrentNumber(String(prod));
            setFirstNumber('');
            break;
          case '/':
            const quociente = Number(firstNumber) / Number(currentNumber);
            setCurrentNumber(String(quociente));
            setFirstNumber('');
            break;
          default:
            const power = Math.pow(Number(firstNumber), Number(currentNumber));
            setCurrentNumber(String(power));
            setFirstNumber('');
        }
        setOperation('');
    }

  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
            <Button label="A/C" onClick={handleOnClear}/>
            <Button label="+/-" onClick={handleSignal}/>
            <Button label="%"/>
            <Button label="/" onClick={handleDivNumbers}/>
        </Row>
        <Row>
            <Button label="7" onClick={()=>handleAddNumber('7')}/>
            <Button label="8" onClick={()=>handleAddNumber('8')}/>
            <Button label="9" onClick={()=>handleAddNumber('9')}/>
            <Button label="x" onClick={handleProdNumbers}/>
        </Row>
        <Row>
            <Button label="4" onClick={()=>handleAddNumber('4')}/>
            <Button label="5" onClick={()=>handleAddNumber('5')}/>
            <Button label="6" onClick={()=>handleAddNumber('6')}/>
            <Button label="-" onClick={handleDifNumbers}/>
        </Row>
         <Row>
            <Button label="1" onClick={()=>handleAddNumber('1')}/>
            <Button label="2" onClick={()=>handleAddNumber('2')}/>
            <Button label="3" onClick={()=>handleAddNumber('3')}/>
            <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
            <Button label="^" onClick={handlePower}/>
            <Button label="0" onClick={()=>handleAddNumber('0')}/>
            <Button label="." onClick={()=>handleAddNumber('.')}/>
            <Button label="=" onClick={handleResultNumbers}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
