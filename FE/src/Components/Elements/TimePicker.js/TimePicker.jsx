import React, { useState } from 'react';
import { Button, Popover, PopoverBody, PopoverHeader, Form, FormGroup, Label, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const TimePicker = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [customPeriod, setCustomPeriod] = useState({ start: '', end: '' });

  const togglePopover = () => setPopoverOpen(!popoverOpen);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setPopoverOpen(false);
  };

  const handleCustomPeriodChange = (e) => {
    const { name, value } = e.target;
    setCustomPeriod({ ...customPeriod, [name]: value });
  };

  return (
    <div className="App mt-4">
      <Button id="Popover1" type="button" className="btn btn-light py-1 px-3 border-1 border ms-3" onClick={togglePopover}>
        <FontAwesomeIcon icon={faClock} />{' '}
        {selectedOption === 'all-day' ? 'All Day' : selectedOption === 'custom-period' ? `Custom: ${customPeriod.start} - ${customPeriod.end}` : 'Select Period'}
      </Button>
      <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={togglePopover}>
        <PopoverHeader>Select Period</PopoverHeader>
        <PopoverBody>
          <Button color="link" onClick={() => handleOptionChange('all-day')}>All Day (24 hours)</Button>
          <Button color="link" onClick={() => handleOptionChange('custom-period')}>Custom Period</Button>
          {selectedOption === 'custom-period' && (
            <Form>
              <FormGroup>
                <Label for="start">Start Time</Label>
                <Input type="time" name="start" id="start" value={customPeriod.start} onChange={handleCustomPeriodChange} />
              </FormGroup>
              <FormGroup>
                <Label for="end">End Time</Label>
                <Input type="time" name="end" id="end" value={customPeriod.end} onChange={handleCustomPeriodChange} />
              </FormGroup>
            </Form>
          )}
        </PopoverBody>
      </Popover>
    </div>
  );
};

export default TimePicker;
