import { FormEvent, useRef, useState } from 'react';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { NoteData, Tag } from '../../App';
import CreateTableReactSelect from 'react-select/creatable';
import { v4 as uuidV4 } from 'uuid';

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>

export const NoteForm = ({
  onSubmit,
  onAddTag,
  availableTags,
  title='',
  markdown='',
  tags=[],
}: NoteFormProps) => {

  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });
    navigate('..');
  };

  return (
    <Form onSubmit={handleSubmit} className='mt-4'>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                required
                ref={titleRef}
                defaultValue={title}
                style={{maxWidth: '30rem'}}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="tags" className="mb-3">
              <Form.Label>Tags</Form.Label>
              <div style={{maxWidth: '30rem'}}>

              <CreateTableReactSelect
                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label };
                  onAddTag(newTag);
                  setSelectedTags((prev) => [...prev, newTag]);
                }}
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value };
                    })
                  );
                }}
                isMulti
              />
              </div>
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
          defaultValue={markdown}
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
