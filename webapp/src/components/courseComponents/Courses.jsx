import { useQuery } from '@apollo/client';
import CourseRow from './CourseRow';
import Spinner from '../Spinner';
import { GET_COURSES} from '../../../../backend/client/queries/courseQueries';

export default function Courses() {
  const { loading, error, data } = useQuery(GET_COURSES);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead>
            <tr>
              <th>Title</th>
              <th>id</th>
              <th>num_units</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.courses.map((course) => (
              <CourseRow key={course.id} course={course} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
