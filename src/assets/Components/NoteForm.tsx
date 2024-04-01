import { FormEvent, useRef, useState } from 'react';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NoteData, Tag } from '../../App';
import CreateTableReactSelect from 'react-select/creatable';

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
};

export const NoteForm = ({onSubmit}: NoteFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: []
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" required ref={titleRef} />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="tags" className="mb-3">
              <Form.Label>Title</Form.Label>
              <CreateTableReactSelect isMulti />
            </Form.Group>
          </Col>
        </Row>

        <Form.Control
          as="textarea"
          placeholder="Enter content"
          required
          ref={markdownRef}
          style={{ overflow: 'hidden', resize: 'none' }}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = target.scrollHeight + 'px';
          }}
        />

        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
};
