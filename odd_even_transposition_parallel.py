from multiprocessing import Lock, Pipe, Process

process_lock = Lock()

def oe_process(position, value, l_send, r_send, lr_cv, rr_cv, result_pipe):
    global process_lock

    for i in range(10):
        if (i + position) % 2 == 0 and r_send is not None:
            process_lock.acquire()
            r_send[1].send(value)
            process_lock.release()

            process_lock.acquire()
            temp = rr_cv[0].recv()
            process_lock.release()

            value = min(value, temp)
        elif (i + position) % 2 != 0 and l_send is not None:
            process_lock.acquire()
            l_send[1].send(value)
            process_lock.release()

            process_lock.acquire()
            temp = lr_cv[0].recv()
            process_lock.release()

            value = max(value, temp)
    result_pipe[1].send(value)


def odd_even_transposition(arr):
    process_array_ = []
    result_pipe = []
    for _ in arr:
        result_pipe.append(Pipe())
    temp_rs = Pipe()
    temp_rr = Pipe()
    process_array_.append(
        Process(
            target=oe_process,
            args=(0, arr[0], None, temp_rs, None, temp_rr, result_pipe[0]),
        )
    )
    temp_lr = temp_rs
    temp_ls = temp_rr

    for i in range(1, len(arr) - 1):
        temp_rs = Pipe()
        temp_rr = Pipe()
        process_array_.append(
            Process(
                target=oe_process,
                args=(i, arr[i], temp_ls, temp_rs, temp_lr, temp_rr, result_pipe[i]),
            )
        )
        temp_lr = temp_rs
        temp_ls = temp_rr

    process_array_.append(
        Process(
            target=oe_process,
            args=(
                len(arr) - 1,
                arr[len(arr) - 1],
                temp_ls,
                None,
                temp_lr,
                None,
                result_pipe[len(arr) - 1],
            ),
        )
    )

    for p in process_array_:
        p.start()

    for p in range(len(result_pipe)):
        arr[p] = result_pipe[p][0].recv()
        process_array_[p].join()
    return arr


def main():
    arr = list(range(10, 0, -1))
    print("Initial List")
    print(*arr)
    arr = odd_even_transposition(arr)
    print("Sorted List\n")
    print(*arr)


if __name__ == "__main__":
    main()
